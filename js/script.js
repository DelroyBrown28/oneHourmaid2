$(document).ready(function () {

    $(".servicesWrap").click(fadeOutOptions);

    function fadeOutOptions() {
        $(".bedrooms").fadeToggle("fast");
        $(".bathrooms").fadeToggle("fast");
        $(".kitchens").fadeToggle("fast");
        $(".servicesListContainer").fadeToggle();
        $(".bedrooms").unbind(fadeOutOptions)
        $(".servicesWrap").unbind(fadeOutOptions);


    }

    $(".bedrooms").click(numberOfBedrooms);

    function numberOfBedrooms() {
        
    }


});