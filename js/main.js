var newSlider = function(){
	
  var container = "?";
  var left = 0;
  
 	return {

    slides : "?",

    init : function(){
      var app = this;
      var slider = $('slider');
      
      container = slider.find('ul');
      
      var controlLeft  = $('#prev');
      var controlRight = $('#next');

      controlLeft.bind('click',function(){
        app.prev();
      });
    },

    move : function(){
      container.css( "?" )
    },

    prev : function(){
      //incrementar left
      //left =
      this.move()
    },

    next : function(){
      //decrementar left
      //left =
      this.move()
    }

  }
}

$(document).ready( function(){
	var slider = newSlider();
      slider.init();
  //instanciar slider
  //asignar eventos prev y next
} );