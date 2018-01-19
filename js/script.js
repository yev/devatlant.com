jQuery('document').ready(function($){

        //SCROLLANCHOR ANIMATION SCRIPT
        var $root = $('html, body');
        $('a.anchor').click(function() {
            $root.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 1300);
            return false;
        });

        // PARALAX
        $('.one').parallax({imageSrc: './img/one-bg.jpg'});



         $(window).scroll(function () {
            if ($(this).scrollTop() > 300)
                $('#header').addClass('thin');
            else
                $('#header').removeClass('thin');
            });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    $('a.popovers').on('click', function(e) {e.preventDefault(); return true;});

 });
