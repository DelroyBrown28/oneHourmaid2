$(document).ready(function () {

    $(".service").click(serviceOptions);


    function serviceOptions() {
        $(".listContainer").slideToggle();
        $(".service").unbind(hoverEffect);



    }

    $(".service").click(hoverEffectTwo);

    function hoverEffectTwo() {
        $(".service").css("color", "black");


    }

});