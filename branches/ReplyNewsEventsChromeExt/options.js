window.addEventListener('load', function() {

	options.mainMenu.value = localStorage.mainMenu;
	options.nationality.value = localStorage.nationality;

  options.mainMenu.onchange = function() {
         localStorage.mainMenu = options.mainMenu.value;
  };
  options.nationality.onchange = function() {
         localStorage.nationality = options.nationality.value;
  };
  
  
});
