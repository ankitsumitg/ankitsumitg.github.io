$( ".inner-switch" ).on("click", function(){
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "🌑" );
      $( ".mode" ).text( "Go Dark :" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "🔆" );
      $( ".mode" ).text( "Unleash Light :" );
    }
});

$( document ).ready(function() {
    $( "body" ).addClass( "dark" );
    $( ".inner-switch" ).text( "🔆" );
    $( ".mode" ).text( "Unleash Light :" );
});