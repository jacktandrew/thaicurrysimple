(function(){
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
            $nav = $('nav,top'),
            navTop = $('nav.top ul').offset().top;

        $(document).scroll(function() {
            if( $(this).scrollTop() > navTop ) {
                if( !fixed ) {
                    fixed = true;
                    $nav.addClass('fixed');
                }
            } else {
                if( fixed ) {
                    fixed = false;
                    $nav.removeClass('fixed');
                }
            }
        });
    }

    fixMenuToTop();
    listenForToggle();
    setDayOfWeek();
}());
