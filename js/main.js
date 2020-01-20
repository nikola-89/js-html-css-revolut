$(document).ready(function() {
// ***************************
    $('.text-with-dropdown').mouseover(
        function() {
            removeDropwonActive();
            dropdownActive(this);
    });

    $(document).click(
        function() {
            removeDropwonActive();
    });
// ***************************
});

function dropdownActive(thisElement) {
    $(thisElement).children('.dropdown').addClass('active');
}

function removeDropwonActive() {
    $('.dropdown.active').removeClass('active');
}
