// 111807915569332.

jQuery(function($) {
    var fqlUserId = '109877149095742', // the user id
        fqlAlbumId = '25231',  // the album id
        fqlQuery = "SELECT src_big, caption, src_small, src_small_height, src_small_width, src FROM photo WHERE owner = " + fqlUserId + " AND aid = '" + fqlUserId + '_' + fqlAlbumId + "'",
        $lightBox = $('.lightBox');

    $.getJSON("https://api.facebook.com/method/fql.query?format=json&callback=?&query=" + escape(fqlQuery), function(data) {
        for (var i = 0; i < data.length; i++) {


            var height = data[i].src_small_height,
                width = data[i].src_small_width,
                $pic = jQuery(  '<div>' +
                                    '<a href="' + data[i].src_big + '">' +
                                        '<img src="' + data[i].src_small + '" alt="' + data[i].caption + '" />' +
                                    '</a>' +
                                '</div>');

            if (height > 90) {
                $pic.appendTo('.talls');
            } else if (height >= 70) {
                $pic.appendTo('.mids');
            } else if (height >= 48 && width >= 68) {
                $pic.appendTo('.shorts')
            }

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