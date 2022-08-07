document.querySelector( ".inner-switch" ).addEventListener("click", function(){
  if( document.querySelector( "body" ).classList.contains( "dark" )) {
    document.querySelector( "body" ).classList.remove( "dark" );
    document.querySelector( ".inner-switch" ).innerHTML = "🌑"
    document.querySelector( ".mode" ).innerHTML = "Go Dark :";
  } else {
    document.querySelector( "body" ).classList.add( "dark" );
    document.querySelector( ".inner-switch" ).innerHTML = "🔆";
    document.querySelector( ".mode" ).innerHTML = "Unleash Light :";
  }
});