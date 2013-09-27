// <!-- thaicurrysimple userId = 174329427 -->
// <!-- thaicurrysimple accessToken = 174329427.467ede5.16893db4c3984ba081d6ced06a26dd73 -->

var feed = new Instafeed({
    get: 'user',
    limit: '10',
    sortby: 'random',
    // userId: 174329427,
    // accessToken: '174329427.467ede5.16893db4c3984ba081d6ced06a26dd73',
    userId: 174329427,
    accessToken: '174329427.467ede5.16893db4c3984ba081d6ced06a26dd73',
    template:   '<div id="{{id}}" class="instagram_container">' +
                    '<div id="{{id}}">' +
                        '<a href="{{link}}" target="_blank" title="{{caption}} by @{{model.user.username}}" >' +
                            '<img src="{{image}}" alt="{{caption}} by @{{model.user.username}}" class="instagram_image" />' +
                        '</a>' +
                    '</div>' +
                    '<div class="instagram_image_meta">' +
                        '<div class="likes instagram_image_meta_item">' +
                            '<p>' +
                                '<a class="icon-heart" href="{{link}}" target="_blank" title="{{caption}}" >' +
                                    '{{likes}}' +
                                '</a>' +
                            '</p>' +
                        '</div>' +
                        '<div class="comments instagram_image_meta_item">' +
                            '<p>' +
                                '<a class="icon-bubble" href="{{link}}" target="_blank" title="{{caption}}" >' +
                                    '{{comments}}' +
                                '</a>' +
                            '</p>' +
                        '</div>' +
                        '<div class="owner instagram_image_meta_item">' +
                            '<p>' +
                                '<a href="http://instagram.com/{{model.user.username}}" target="_blank" title="{{model.user.full_name}}" >' +
                                    '<img src="{{model.user.profile_picture}}" class="owner_profile_picture" />' +
                                    '{{model.user.full_name}}' +
                                '</a>' +
                            '</p>' +
                        '</div>' +
                        '<div class="caption instagram_image_meta_item">' +
                            '<p>' +
                                '{{caption}}' +
                            '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>'
});


feed.run();

























