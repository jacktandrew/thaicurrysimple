jQuery(function($) {
    var ThaiCurrySimple = '109877149095742',     //  Facebook user id for Thai Curry Simple,
        globalLimit = 20;
        photo_sets = [
            desserts = {
                userID: ThaiCurrySimple,
                albumID: '87423',
                selector: '.desserts',
                limit: 10
            },
            kids = {
                userID: ThaiCurrySimple,
                albumID: '25241',
                selector: '.kids',
            },
            eggs = {
                userID: ThaiCurrySimple,
                albumID: '44862',
                selector: '.eggs',
            }
        ],

        gallery = {
            populate: function(set) {
                gallery.getData(set)
                    .then(function(data) {
                        gallery.findSize(data, set);
                        gallery.buildHTML(data, set);
                    })
                    .done(function(){
                        gallery.enableLightBox(set.selector);
                    });
            },

            findSize: function(data, set) {
                var limit,
                    limits = [set.limit, globalLimit, data.length];

                limit = limits.sort(function(a,b){return a-b})[0];

                set.size = limit;

                $(set.selector).find('.inner').css({width: limit * 160});
            },

            getData: function(set) {
                var query = "SELECT src_big, caption, src FROM photo WHERE owner = " + set.userID + " AND aid = '" + set.userID + '_' + set.albumID + "'";
                return $.getJSON("https://api.facebook.com/method/fql.query?format=json&callback=?&query=" + escape(query), function(data) {});
            },

            buildHTML: function(data, set) {
                var i, imgHTML;

                for (i = 0; i < set.size; i++) {
                    imgHTML = $('<li class="img_wrap">' +
                                    '<a href="' + data[i].src_big + '">' +
                                      '<img src="' + data[i].src_big +
                                        '" title="' + data[i].caption + '" />' +
                                    '</a>' +
                                  '</li>');
                    $(set.selector + ' .inner').append(imgHTML);
                }
            },

            enableLightBox: function(selector) {
                var $lightBox = $('.lightBox');
                $(selector + ' a').click(function(event){
                    event.preventDefault();
                    src = $(this).attr('href');
                    $lightBox.find('img').attr('src', src);
                    $lightBox.show()
                });
            },

            scrollPhotos: function(event) {
                event.preventDefault();
                var $inner = $(this).parent().find('.inner'),
                    $outer = $(this).parent().find('.outer'),
                    innerPosition = parseInt($inner.css('left')),
                    innerWidth = parseInt($inner.css('width')),
                    outerWidth = parseInt($outer.css('width')),
                    effectiveWidth = -(innerWidth - outerWidth);
                    direction = event.data.distance.charAt(0);

                if ( innerPosition > -300 && direction == '+' ) {
                    console.log('too far backward')
                    $inner.animate({left: '+=100' }, 500, function(){
                        $inner.animate({left: 0 }, 300, function() {
                            $inner.clearQueue();
                        });
                    });
                } else if (innerPosition < effectiveWidth + 300 && direction == '-' ) {
                    console.log('too far forward')
                    $inner.animate({left: '-=100' }, 300, function(){
                        $inner.animate({left: effectiveWidth }, 500, function() {
                            $inner.clearQueue();
                        });
                    })
                } else {
                    $inner.animate({left: event.data.distance }, {duration: 500, queue: false});
                }

                console.log(innerPosition)
            },

            close: function(event) {
                event.preventDefault();
                $(this).parent().hide();
            }
        };

        $('.close').click(gallery.close);
        $('.forwards').click({distance: '-=300' }, gallery.scrollPhotos);
        $('.backwards').click({distance: '+=300' }, gallery.scrollPhotos);

        photo_sets.forEach(function(set) {
            gallery.populate(set);
        });
});





















