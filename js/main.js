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
            // 8 + 170 + 22 = 200
        $(document).scroll(function() {
            if( $(this).scrollTop() > 208 ) {
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

    function showOverlay() {
        var $instaDiv = $('#instafeed > div');
        $instaDiv.click(function() {
            $instaDiv.find('.overlay').hide();
            $(this).find('.overlay').show();
        })
    }

    fixMenuToTop();
    listenForToggle();
    setDayOfWeek();
});
