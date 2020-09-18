jQuery(document).ready(function($) {
    // Script para abrir o menu de navegação:

    $(document).ready(function(){
        $('#nav-icon3').click(function(){
            
            if (document.getElementById('nav-icon3').classList.contains('open')) {
                document.getElementById("nav-icon3").classList.remove('open');
                document.getElementById("menu-navegacao").style.width = "0";
                document.getElementById("main").style.marginLeft= "0";
                document.getElementById("topo").style.marginLeft = "0";          
            } else {
                document.getElementById("nav-icon3").classList.add('open');
                document.getElementById("menu-navegacao").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.getElementById("topo").style.marginLeft = "250px";
            }
        });
    });

    //Script para fazer o smooth scrolling:

    // Select all links with hashes
    $('#menu-navegacao a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 30
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });
});