jQuery(function($) {
    var ThaiCurrySimple = '109877149095742',     //  Facebook user id for Thai Curry Simple,
        photo_sets = {
            daily_special: {
                userID: ThaiCurrySimple,
                albumID: '25231',
                selector: '.trust',
                limit: 1
            }
        },

        gallery = {
            populate: function(set) {
                gallery.getData(set)
                    .then(function(data) {
                        gallery.buildHTML(data, set);
                    })
            },

            getData: function(set) {
                var query = "SELECT src_big, caption, src FROM photo WHERE owner = " + set.userID + " AND aid = '" + set.userID + '_' + set.albumID + "'";
                return $.getJSON("https://api.facebook.com/method/fql.query?format=json&callback=?&query=" + escape(query), function(data) {});
            },

            buildHTML: function(data, set) {
                var imgHTML = $('<img src="' + data[0].src_big + '" />' +
                                '<h4>' + data[0].caption + '</h4>');

                $(set.selector).append(imgHTML);
                console.log(data[0].caption)
            }
        };


    gallery.populate(photo_sets.daily_special);
});






















