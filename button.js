mybutton = document.getElementById("myBtn");

function start(){
	window.onscroll = function() {scrollFunction()};

}

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		mybutton.style.display = "block";
		
	} else {
		mybutton.style.display = "none";
		
	}
}

function topFunction() {
	document.body.scrollTop = 0; //safari
	document.documentElement.scrollTop = 0;
}