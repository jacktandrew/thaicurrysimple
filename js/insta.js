// <!-- thaicurrysimple userId = 174329427 -->
// <!-- thaicurrysimple accessToken = 174329427.467ede5.16893db4c3984ba081d6ced06a26dd73 -->

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'thaicurrysimple',
    resolution: 'standard_resolution',
    limit: '8',
    sortby: 'most-recent',
    // userId: 174329427,
    accessToken: '174329427.467ede5.16893db4c3984ba081d6ced06a26dd73',
    template:   '<div id="{{id}}" class="instagram_container">' +
                    '<div id="{{id}}">' +
                        '<a href="{{link}}" target="_blank" >' +
                            '<img src="{{image}}" alt="{{caption}} by @{{model.user.username}}" class="instagram_image" />' +
                        '</a>' +
                    '</div>' +

                    '<div class="owner instagram_image_meta_item">' +

                            '<a href="http://instagram.com/{{model.user.username}}" target="_blank" title="{{model.user.full_name}}" >' +
                                '<img src="{{model.user.profile_picture}}" class="owner_profile_picture" />' +
                                '<p>{{model.user.full_name}}</p>' +
                            '</a>' +
                        '</p>' +
                    '</div>' +
                    '<div class="caption instagram_image_meta_item">' +
                        '<p>' +
                            '{{caption}}' +
                        '</p>' +
                    '</div>' +
                '</div>'
});


feed.run();

























