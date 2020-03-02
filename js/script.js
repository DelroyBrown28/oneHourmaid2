$(document).ready(function () {


    $(".basicClean").click(servicesOptions);

    function servicesOptions() {
        $(".basicClean").slideToggle();
        $(".deepClean").slideToggle();
        $(".moveInOut").slideToggle();
        $(".optionsWrap").slideToggle();
        $(".basicClean").unbind(servicesOptions);



    }


    $(".services").click(servicesOptionsRevert);

    function servicesOptionsRevert() {
        $(".basicClean").slideToggle();
        $(".bedrooms").slideToggle();
        $(".deepClean").slideToggle();
        $(".moveInOut").slideToggle();
        $(".bathrooms").slideToggle();
        $(".kitchens").slideToggle();


    }



});