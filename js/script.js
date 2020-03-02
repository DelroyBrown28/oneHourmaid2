$(document).ready(function () {

    $(".service").click(fadeOutOptions);


    function fadeOutOptions() {
        $(".bedroom").fadeTo(100);
        $(".service").unbind("click",fadeOutOptions);


    }

    $(".service").click(fadeInOptions);

    function fadeInOptions() {
        $(".baicClean").fadeIn();
        $(".deepClean").fadeIn();
        $(".movingInOut").fadeIn();

    }


});