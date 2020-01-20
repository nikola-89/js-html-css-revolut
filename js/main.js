$(document).ready(function() {
// ***************************
    $('.text-with-dropdown').mouseover(
        function() {
            dropdown(this);
    });

    $(document).click(
        function() {
            $('.dropdown.active').removeClass('active');
    });
// ***************************
});

function dropdown(thisElement) {
    $('.dropdown.active').removeClass('active');
    $(thisElement).children('.dropdown').addClass('active');
}
