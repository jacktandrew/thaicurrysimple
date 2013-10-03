$(function(){
    function setDayOfWeek() {
        var todayObject = new Date(),
            todayNumber = todayObject.getDay(),
            namesOfDays = {
                0: 'sunday',
                1: 'monday',
                2: 'tuesday',
                3: 'wednesday',
                4: 'thursday',
                5: 'friday',
                6: 'saturday'
            },
            todayName = namesOfDays[todayNumber],
            $todaySpecial = $('.' + todayName);

        console.log(todayName);
        $todaySpecial.addClass('active');
    };

    function listenForToggle() {
        $('.toggle a').click(function(event) {
            event.preventDefault();
            var allToggles = $('.toggle a.active'),
                target = $(this),
                targetSection = target.attr('href'),
                allSections = $('#menus > section');

            allToggles.removeClass('active');
            target.addClass('active');
            allSections.hide();
            $(targetSection).show();
        });
    };

    function fixMenuToTop() {
        var fixed = false,
            $logo = $('.logo'),
            $nav = $('header nav');

        $(document).scroll(function() {
            if( $(this).scrollTop() > 210 ) {
                if( !fixed ) {
                    fixed = true;
                    $logo.addClass('fixed');
                    $nav.addClass('fixed');
                }
            } else {
                if( fixed ) {
                    fixed = false;
                    $logo.removeClass('fixed');
                    $nav.removeClass('fixed');
                }
            }
        });
    }

    function dateFormatter(date) {
      return date.toTimeString();
    }

    function handleTweets(tweets){
        console.log(tweets)
        var element = document.getElementById('impromtu');
        element.innerHTML = tweets;
    }

    twitterFetcher.fetch('385651192933519361', 'impromtu', 1, true, false, true, '', false, handleTweets, false);
    fixMenuToTop();
    listenForToggle();
    setDayOfWeek();
});
