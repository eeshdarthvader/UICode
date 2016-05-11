$(document).ready(function() {
    $("#content").find("[id^='tab']").hide(); // Hide all content
    $("#tabs li:first").next().attr("id","current"); // Activate the first tab
    $('#loader').fadeIn();

    $("#content #tab2").fadeIn(); // Show first tab's content
    
    $('#loader').fadeOut();


    $('#tabs a').click(function(e) {

         $('#loader').fadeIn();
        e.preventDefault();
        if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
         return;       
        }
        else{             
          $("#content").find("[id^='tab']").hide(); // Hide all content
          $("#tabs li").attr("id",""); //Reset id's
          $(this).parent().attr("id","current"); // Activate this
          $('#' + $(this).attr('name')).fadeIn(); // Show content for the current tab
        }

        $('#loader').fadeOut();

    });



    $('.mailus').on('click',function(e){

        e.preventDefault();
        $("#content").find("[id^='tab']").hide();

        $("#tabs li[id=current]").attr("id",'');
        $("#tabs li:last").attr("id","current"); // Activate the first tab
        $("#content #tab3").fadeIn(); 

        


    })
            $('[data-toggle="tooltip"]').tooltip(); 
     


    $('.alert .close').on('click', function(e) {
        $(this).parent().hide();
    });


    $('#subject').on('focus',function(){

        if($('#subject').hasClass('rederror'))
        {
            $('#subject').removeClass('rederror');
        }
    });

    $('#subject').on('focus',function(){

        if($('#subject').hasClass('rederror'))
        {
            $('#subject').removeClass('rederror');
        }
    });

    $('#sendmail').on('click',function(e){

        e.preventDefault();

        e.stopPropagation();

        if( $('#subject').val()=='')
        {
           $('#subject').addClass('rederror');
           return false; 
        }  

        $('#login-error').fadeIn();

       
    })
});



(function($) {

    jQuery(document).ready(function() {

        Panel.init();

        $(document).on('click', '.tab-controller', function() {
             Panel.togglePanel();
        });

    });

    var Panel = {

        isVisible : true,
        showMessage : null,
        hideMessage : null,
        animationDuration : 650,
        animationEasing : 'linear',

        init : function() {

        },

        hidePanel : function() {
            $('.panel-wrapper').animate({
                bottom : -(Panel.getAnimationOffset())
            }, Panel.animationDuration, Panel.animationEasing, function() {
                Panel.isVisible = false;
                Panel.updateTabMessage();
            });
        },

        showPanel : function() {
            $('.panel-wrapper').animate({
                bottom : 0
            }, Panel.animationDuration, Panel.animationEasing, function() {
                Panel.isVisible = true;
                Panel.updateTabMessage();
            });
        },

        togglePanel : function() {
            ((this.isVisible) ? this.hidePanel : this.showPanel)();
        },

        updateTabMessage : function() {
            if (this.isVisible) {
                $('.tab-controller .closetab').show();
                $('.tab-controller .showtab').hide();
            } else {
                $('.tab-controller .closetab').hide();
                $('.tab-controller .showtab').show();
            }
        },

        getAnimationOffset : function() {
            return $('.panel-content').height();
        }

    }

})(jQuery);