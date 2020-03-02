$(document).ready(function () {

    $(".service").click(fadeOutOptions);


    function fadeOutOptions() {
        $(".bedroom").slideToggle();
        $(".bathroom").slideToggle();
        $(".kitchen").slideToggle();
        $(".service").unbind("click", fadeOutOptions);


    }

    $(".service").click(fadeInOptions);

    function fadeInOptions() {
        $(".basicClean").delay(1000).slideToggle();
        $(".deepClean").delay(1000).slideToggle();
        $(".movingInOut").delay(1000).slideToggle();
        $(".service").unbind("click", fadeInOptions);
    }

});