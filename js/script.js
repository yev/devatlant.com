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
        
        // SMOOTH MOUSE SCROLL activate script
        jQuery.scrollSpeed(100, 800);
        
        
        
         $(window).scroll(function () { 
            if ($(this).scrollTop() > 300) 
                $('#header').addClass('thin'); 
            else 
                $('#header').removeClass('thin');
            }); 

 });