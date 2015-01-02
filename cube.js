window.onload = init;

function init() {
	document.getElementById("slider").onchange = rotate;
	document.getElementById("verticalslider").onchange = rotate;
	document.getElementById("nearnessslider").onchange = rotate;
}

function rotate(e) {
	var xRotation = document.getElementById("slider").value;
	var yRotation = document.getElementById("verticalslider").value;
	var zRotation = document.getElementById("nearnessslider").value;

	//update labels
	document.getElementById("xdegrees").textContent = xRotation;
	document.getElementById("ydegrees").textContent = yRotation;
	document.getElementById("zdegrees").textContent = zRotation;

	var rx = "rotateX(" + xRotation + "deg) ";
	var ry = "rotateY(" + yRotation + "deg) ";
	var rz = "rotateZ(" + zRotation + "deg)";

	var cube = document.getElementById("cube");
	cube.style[Modernizr.prefixed('transform')] = rx + ry + rz;
}