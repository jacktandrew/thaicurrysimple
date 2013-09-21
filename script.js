// 111807915569332.

jQuery(function($) {
    var fqlUserId = '109877149095742', // the user id
        fqlAlbumId = '25231',  // the album id
        fqlQuery = "SELECT src_big, caption, src FROM photo WHERE owner = " + fqlUserId + " AND aid = '" + fqlUserId + '_' + fqlAlbumId + "'",
        $lightBox = $('.lightBox');

    $.getJSON("https://api.facebook.com/method/fql.query?format=json&callback=?&query=" + escape(fqlQuery), function(data) {
        for (var i = 0; i < data.length; i++) {

            var $pic = jQuery(  '<div>' +
                                    '<a href="' + data[i].src_big + '">' +
                                        '<img src="' + data[i] + '" title="' + data[i].caption + '" />' +
                                    '</a>' +
                                '</div>');


        }
    })
        .done(function() {
            $('#photoStream a').click(function(event){
                event.preventDefault();
                src = $(this).attr('href');
                $lightBox.find('img').attr('src', src);
                $lightBox.show()
            });
        })

    $('.close').click(function(event){
        event.preventDefault();
        $(this).parent().hide();
    });

});