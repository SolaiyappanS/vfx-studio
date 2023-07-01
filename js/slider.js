var divisor, slider;

function setValues(){
  divisor = [document.getElementById("divisor1"),document.getElementById("divisor2"),document.getElementById("divisor3")];
  slider = [document.getElementById("slider1"),document.getElementById("slider2"),document.getElementById("slider3")];
}

function moveDivisor() { 
  for(var i=0; i<3; i++){
	divisor[i].style.width = slider[i].value+"%";
}
}