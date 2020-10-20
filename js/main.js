// listen for scroll
$(window).scroll(function () {
    // apply css classes based on the situation
    if ($("#navigationBar").offset().top > 100) {
        $("#navigationBar").addClass("navbar-scrolled");
        $("#navbarNavDropdown").addClass("nav-background");
    } else {
        $("#navigationBar").removeClass("navbar-scrolled");
        $("#navbarNavDropdown").removeClass("nav-background");
    }
});
