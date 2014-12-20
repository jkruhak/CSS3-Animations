var bike = document.getElementById("bike");
bike.addEventListener("click", pedal, false);

function pedal() {
	var frontwheel, backwheel, bike, pedalwheel;
	bike = document.getElementById("bike");
	backwheel = document.getElementById("backwheel");
	frontwheel = document.getElementById("frontwheel");
	pedalwheel = document.getElementById("pedalwheel");

	if (bike.className) {
		bike.className = "";
		backwheel.className = "";
		frontwheel.className = "";
		pedalwheel.className = "";
	}
	else {
		bike.className = "move";
		backwheel.className = "spin";
		frontwheel.className = "spin";
		pedalwheel.className = "spin";
	}
}