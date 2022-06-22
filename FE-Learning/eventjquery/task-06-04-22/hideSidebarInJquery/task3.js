$(document).ready(function(){
$(window).resize(function() {
      var window_width=$(window).width();
      if(window_width<576){
        $('.sidebar').hide();
    }
      else {
        $('.sidebar').show();
      }
      
    });

})
    