document.querySelector( ".inner-switch" ).addEventListener("click", function(){
  if( document.querySelector( "body" ).classList.contains( "dark" )) {
    document.querySelector( "body" ).classList.remove( "dark" );
    document.querySelector( ".inner-switch" ).text( "🌑" );
    document.querySelector( ".mode" ).text( "Go Dark :" );
  } else {
    document.querySelector( "body" ).classList.add( "dark" );
    document.querySelector( ".inner-switch" ).text( "🔆" );
    document.querySelector( ".mode" ).text( "Unleash Light :" );
  }
});