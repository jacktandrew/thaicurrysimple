$(function() {

    function dateFormatter(date) {
      return date.toTimeString();
    }

    // @jacktandrew         385617400101498880
    // @thaicurrysimple     385651192933519361
    // ##### Advanced example 2 #####
    // Similar as previous, except this time we pass a custom function to render the
    // tweets ourself! Useful if you need to know exactly when data has returned or
    // if you need full control over the output.
    twitterFetcher.fetch('385617400101498880', 'impromtu', 1, true, false, true, '', false, handleTweets, false);

    function handleTweets(tweets){
        var element = document.getElementById('impromtu');
        element.innerHTML = tweets;
    }

});