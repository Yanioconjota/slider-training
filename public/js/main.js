var newSlider = function(){
  var left = 0;

 	return {

    slides : "3",

    init : function(){
      var app = this;
      var slider = $('#slider');

      container = slider.find('ul');

      var controlLeft  = $('#prev');
      var controlRight = $('#next');

      controlLeft.bind('click',function(){
        app.prevSlide();
      });

			controlRight.bind('click',function(){
        app.nextSlide();
      });
    },

    move : function(){
      container.css( "left",left )
    },

    prevSlide : function(){
      //incrementar left
			left = -100;
      this.move(
				console.log(left)
			)
    },

    nextSlide : function(){
      //decrementar left
      left = 100;
      this.move(
				console.log(left)
			)
    }

  }
}

$(document).ready( function(){
	var slider = newSlider();
      slider.init();
  //instanciar slider
  //asignar eventos prev y next
} );
