

//Hamburger menu 
function hamburger() {
	
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
		logo.style.display = "block";
	}else {
		 menu.style.display = "block";
		menu.style.backgroundColor = "#e2eae2"
	}