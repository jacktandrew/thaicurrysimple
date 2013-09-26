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
                allSections = $('.menus > section');

            allToggles.removeClass('active');
            target.addClass('active');
            allSections.hide();
            $(targetSection).show();
        });
    };
    listenForToggle();
    setDayOfWeek();
});
