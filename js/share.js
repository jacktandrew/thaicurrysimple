function gotoShare(event) {
    event.preventDefault();
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g,
        function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : '{' + number + '}';
        });
    };

    var facebookFormat = "http://www.facebook.com/share.php?u={0}",
        twitterFormat = "http://twitter.com/intent/tweet?text={2}",
        instagramFormat = "http://instagram.com/thaicurrysimple",
        messageFormat = "Check out {0}!",
        fullUrl = window.location.href.replace(/\/$/, ""),
        pageTitle = document.title,
        message = messageFormat.format(fullUrl, pageTitle),
        shareUrl = "";

    switch(event.data.param) {
        case "Facebook":
            shareUrl = facebookFormat.format(fullUrl, pageTitle, message);
            break;
        case "Twitter":
            shareUrl = twitterFormat.format(fullUrl, pageTitle, message);
            break;
        case "Instagram":
            shareUrl = instagramFormat.format();
            break;

    }
    window.open(shareUrl);
}

(function(){
    $('.icon-facebook').click({param: 'Facebook'}, gotoShare);
    $('.icon-twitter-2').click({param: 'Twitter'}, gotoShare);
    $('.icon-instagram').click({param: 'Instagram'}, gotoShare);
}());
