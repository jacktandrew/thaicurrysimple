// <!-- thaicurrysimple userId = 174329427 -->
// <!-- thaicurrysimple accessToken = 174329427.467ede5.16893db4c3984ba081d6ced06a26dd73 -->

function listenForClick() {
    var $instaDiv = $('#instafeed > div');

    $instaDiv.click(function() {
        $instaDiv.find('.overlay').hide();
        $(this).find('.overlay').show();
    });
};

function sanitizeProfanity(json) {
    json.data.forEach(function(datum) {
        datum.caption.text = datum.caption.text.replace(/fuck/gi, 'f***').replace(/shit/gi, 's***').replace(/cunt/gi, '****')
    });
};

var template = '<div class="instagram_container">' +
                    '<div>' +
                        '<img src="{{image}}" alt="{{caption}} by @{{model.user.username}}" class="instagram_image" />' +
                    '</div>' +

                    '<a href="{{link}}" target="_blank" title="View on Instagram" alt="View on Instagram" class="icon-instagram"></a>' +

                    '<div class="overlay">' +

                        '<a class="caption" href="{{link}}" target="_blank" class="caption instagram_image_meta_item">' +
                            '{{caption}}' +
                        '</a>' +

                        '<div class="owner instagram_image_meta_item">' +

                                '<a href="http://instagram.com/{{model.user.username}}" target="_blank" title="{{model.user.full_name}}" >' +
                                    '<img src="{{model.user.profile_picture}}" class="owner_profile_picture" />' +
                                    '<p>{{model.user.full_name}}</p>' +
                                '</a>' +

                        '</div>' +
                    '</div>' +
                '</div>',


    feed = new Instafeed({
        get: 'tagged',
        tagName: 'thaicurrysimple',
        resolution: 'standard_resolution',
        limit: '9',
        sortby: 'most-recent',
        accessToken: '174329427.467ede5.16893db4c3984ba081d6ced06a26dd73',
        template: template,
        success: sanitizeProfanity,
        after: listenForClick
    });

feed.run();



















