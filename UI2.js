// Button Tilt System
const button = $('button').tilt({
      maxTilt: 10,
      perspective: 3000,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      scale: '1.05',
      speed: '1000',
      transition: true,
      disableAxis: null,
      axis: null,
      reset: true,
      glare: false,
      maxGlare: 0.3
});

const card = $('card').tilt({
      maxTilt: 10,
      perspective: 1000,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      scale: '1.01',
      speed: '2000',
      transition: true,
      disableAxis: null,
      axis: null,
      reset: true,
      glare: false,
      maxGlare: 0.3
});

const input = $('input[type=submit]').tilt({
      maxTilt: 10,
      perspective: 1000,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      scale: '1.05',
      speed: '1000',
      transition: true,
      disableAxis: null,
      axis: null,
      reset: true,
      glare: false,
      maxGlare: 0.3
});


// Input Box
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  if ( $( inputs[i] ).attr( "type" ) == "text"  ) {
    var inpute = inputs[i];
    $( inpute ).wrap( "<div class='size input-effect' style='width:" + $( inpute ).attr('width') + ";'></div>" );
    $( "<span class='focus-border'></span></div>" ).insertAfter( inpute );
    $( inpute ).after( "<label>" + $( inpute ).attr('placeholder') + "</label>");
    $( inpute ).attr('placeholder', "");
    $( inpute ).addClass( 'input' );
  }
  if ( $( inputs[i] ).attr( "type" ) == "passcode"  ) {
    var inpute = inputs[i];
    $( inpute ).wrap( "<div class='size input-effect' style='width:" + $( inpute ).attr('width') + ";'></div>" );
    $( "<span class='focus-border'></span></div>" ).insertAfter( inpute );
    $( inpute ).after( "<label>" + $( inpute ).attr('placeholder') + "</label>");
    $( inpute ).attr('placeholder', "");
    $( inpute ).addClass( 'input' );
    $( inpute ).addClass( 'passcode' );
  }
}


// Button check if content is in input
	$(window).load(function(){
		$(".col-3 input").val("");

		$(".input-effect input").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})
	});



// Ripple
/*( function($) {
      // Ripple Buttons
      $.fn.ripple = function(config) {

            var config = $.extend({
				hangAround: 200,
				duration: 400
            }, config);

            function init(self) {

                  // Wrap the elements content
                  return $(self).html( "<div class='ripple-content'>" + $(self).html() + "</div>" )

                  // Generate an element that will span the width and height of the button, underlying the button's label
                  .prepend('<div class="ripple-effect-wrapper" aria-hidden="true"></div>')

                  // Class up the element
                  .addClass("ripple")

                  // Bind click events
                  .click( function(e) {

                  		// Set the size of the effect
                  		config.size = $(self).innerWidth() * 2;

                        // Generate the effect markup
                        $(self).find(".ripple-effect-wrapper").append('<div class="ripple-effect"></div>');
                        var effect = $(self).find(".ripple-effect");

                        // Position the effect element
                        var pos = $(self).offset();

                        // Animate
                        $(effect)
						.css({ left: e.pageX - pos.left, top: e.pageY - pos.top })
						.animate({ width: config.size, height: config.size }, config.duration, function() {
							// Clear the effect
	                        setTimeout( function() {
	                            $(effect).fadeOut( function() {
	                                $(effect).remove();
	                            });
	                        }, config.hangAround);
						});
                  });
            }

            var i = 0;
            while( i < this.length ) {
				init(this[i]);
				i ++;
            }

    };
})(jQuery);
$(document).ready( function() {
	$("button").ripple();
  $("input[type=submit]").ripple();
});*/



var selects = document.getElementsByTagName("select");
for (var i = 0; i < selects.length; i++) {
    var select = selects[i];
  $( select ).wrap( "<dropdown style='width:" + $( select ).attr('width') + ";'></dropdown>" );
  $( select ).prepend( "<option disabled selected>" + $( select ).attr("placeholder") + "</option>" );
  $( select ).after("<label>" + $( select ).attr("placeholder") + "</label>")
  $( select ).after("<span></span>")

}

// Button check if content is in inpu
  $(document).ready(function() {
		$("select").change(function(){
			if($( this ).val() != ""){
				$( this ).addClass("selected");

			} else {
				$(this).removeClass("selected");
			}
      if ( $( this ).val() != $( this ).attr( "placeholder" )) {
        $( this ).css('opacity','1');
        $( this ).css('color','#333');
        $( this ).css('font-weight','600');
      }
      $( this ).parent('dropdown').children("label").addClass("active-title");
		})

	});

	$(window).ready(function(){
    radioBox();
		$("select").change( function(){
		  $( this ).next().addClass("blueSlide-close");
		  $( this ).next().removeClass("blueSlide");
		})
    $("select").focusout(function(){
      $( this ).next().addClass("blueSlide-close");
      $( this ).next().removeClass("blueSlide");
		})
    $("select").focusin(function(){
      $( this ).next().removeClass("blueSlide-close");
      $( this ).next().addClass("blueSlide");
		})
		$("select").click(function(){
		  $( this ).next().removeClass("blueSlide-close");
		  $( this ).next().addClass("blueSlide");
		})

	});

// Create Radio Box
function radioBox() {
  var selects = document.getElementsByTagName("input");
  for (var i = 0; i < selects.length; i++) {
    var select = selects[i];
    var input = $( select ).attr( "type" );
    if ( input  == "radio" ) {
      $( select ).wrap( "<div class=radio></div>" );
      $( select ).after( "<label class=radio-label "
        + "for="
        + $( select ).attr( "id" )
        + ">"
        + $( select ).attr( "placeholder" )
        + "</label>" )
    } else if ( input == "checkbox" ) {
      $( select ).wrap( "<div class=checkbox></div>" );
      $( select ).after( "<label class=radio-label "
        + "for="
        + $( select ).attr( "id" )
        + ">"
        + $( select ).attr( "placeholder" )
        + "</label>" )
    }
  }

  var cards = document.getElementsByTagName("card");
  for (var i = 0; i < cards.length; i++) {
    console.log(cards.length)
    var card = cards[i];
    var h1 = $( card ).attr( "h1" );
    var h2 = $( card ).attr( "h2" );
    var image = $( card ).attr( "image" );
    var color = $( card ).attr( "color" );
    console.log(color);

    if ( h1 != null && h2 != null && image == null ) {
      // H1 and H2 but no Image
      $( card ).addClass( "tag" );
      $( card ).append( "<h1>" + h1 +"</h1>" );
      $( card ).append( "<h2>" + h2 +"</h2>" );
      if ( color ) {
        color.toLowerCase();
        if ( color == "blue" || color == "red" || color == "none" || color == "grey" || color == "purple" || color == "yellow" || color == "orange" || color == "green" ) {
          $( card ).wrapInner("<div class=sidebar id=" + color + "></div>");
        } else {
          console.log("Need to select one of the colors avalible. Which are none, blue, red, orange, green, purple, grey.");
          $( card ).wrapInner("<div class=sidebar id=blue></div>");
        }
      } else {
        $( card ).wrapInner("<div class=sidebar id=blue></div>");
      }
    }

    if ( h1 != null && h2 != null && image != null ) {
      if ( color != null ) {
        console.log( "side colors can only be seton card tags. Which have h1 and h2 only.")
      }
      $( card ).append( "<img src='" + image + "'></img>" )
      $( card ).append( "<h1>" + h1 +"</h1>" );
      $( card ).append( "<h2>" + h2 +"</h2>" );
    }

    if ( ( ( h1 != null && h2 == null ) || ( h1 == null && h2 != null ) ) && image != null ) {
      console.log("rwer");
      if ( h1 != null ) {
        var title = h1
      } else {
        var title = h2;
      }
      $( card ).append( "<img src='" + image + "'></img>" )
      $( card ).append( "<h2>" + title +"</h2>" );
      $( card ).addClass( "imgCard" );
    }

    if ( image != null && h1 == null && h2 == null ) {
      $( card ).append( "<img src='" + image + "'></img>" )
      $( card ).addClass( "imgCard" );
    }
  };
}

// Accordian
(function($) {
    //$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);
