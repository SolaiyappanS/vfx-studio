var divisor, slider;

function setValues(){
  divisor = document.getElementById("divisor");
  slider = document.getElementById("slider");
}

function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}