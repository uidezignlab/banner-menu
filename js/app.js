$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $('.side-nav').addClass('slide-out');
    });
    $('.cls-nav').on('click', function () {
        $('.side-nav').removeClass('slide-out');
    })
});