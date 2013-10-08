// <!-- thaicurrysimple userId = 174329427 -->
// <!-- thaicurrysimple accessToken = 174329427.467ede5.16893db4c3984ba081d6ced06a26dd73 -->

function listenForClick() {
    var $instaDiv = $('#instafeed > div');
    $instaDiv.click(function(event) {
        // event.preventDefault();
        $instaDiv.find('.overlay').hide();
        $(this).find('.overlay').show();
    });
};

var template = '<div class="instagram_container">' +
                    '<div>' +
                        '<img src="{{image}}" alt="{{caption}} by @{{model.user.username}}" class="instagram_image" />' +
                    '</div>' +

                    '<a href="{{link}}" target="_blank" title="View on Instagram" tooltip="View on Instagram" alt="View on Instagram" class="icon-instagram"></a>' +

                    '<div class="overlay">' +

                        '<div class="owner instagram_image_meta_item">' +

                                '<a href="http://instagram.com/{{model.user.username}}" target="_blank" title="{{model.user.full_name}}" >' +
                                    '<img src="{{model.user.profile_picture}}" class="owner_profile_picture" />' +
                                    '<p>{{model.user.full_name}}</p>' +
                                '</a>' +

                        '</div>' +

                        '<a href="{{link}}" target="_blank" class="caption instagram_image_meta_item">' +
                            '<p>' +
                                '{{caption}}' +
                            '</p>' +
                        '</a>' +

                    '</div>' +
                '</div>',


    feed = new Instafeed({
        get: 'tagged',
        tagName: 'thaicurrysimple',
        resolution: 'standard_resolution',
        limit: '8',
        sortby: 'most-recent',
        accessToken: '174329427.467ede5.16893db4c3984ba081d6ced06a26dd73',
        template: template,
        after: listenForClick
    });

feed.run();

























