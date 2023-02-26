var socket = io();
var matrix = [];
var first = true;
const size = 50;


function fireЕxtinguisher() {
	var audio = new Audio('./sound/Blastwave_FX_FireExtinguisher_BW.4175.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [10, 5]) }, 300);
}

function createFire() {
	var audio = new Audio('./sound/feuer.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [10, 3]) }, 1000);
}

function createFireMan() {
	var audio = new Audio('./sound/feuer.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [3, 6]) }, 1000);
}


function pred() {
	var audio = new Audio('./sound/T-Rex Attack - QuickSounds.com.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [5, 4]) }, 1000);
	setTimeout(() => { audio.pause(); }, 5000);
}

function grass() {
	var audio = new Audio('./sound/Footsteps-in-grass-moderate-A-www.fesliyanstudios.com.ogg');
	audio.play();
	setTimeout(() => {
		SendReq("spawn", [100, 1])

	}, 1000);

	setTimeout(() => { audio.pause(); }, 5000);
}

function herb() {
	var audio = new Audio('./sound/Indian Elephant 2 - QuickSounds.com.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [15, 2]) }, 1000);
}


function restart() {
	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	SendReq("stop");
	setTimeout(() => { window.location.replace("./index.html?action=restart") }, 3000);
}
function stop() {
	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	SendReq("stop");
	setTimeout(() => { window.location.replace("./index.html") }, 3000);
}
function killFire() {
	var audio = new Audio('./sound/Blastwave_FX_FireExtinguisher_BW.4175.ogg');
	audio.play();
	SendReq("killfire")
}

function showbuttons(id) {
	var button = document.getElementById(id);

	var displaySetting = button.style.display;

	button.style.display = 'block';

}

function hidebuttons(id) {
	var button = document.getElementById(id);

	var displaySetting = button.style.display;

	button.style.display = 'none';

}

function setkill() {

	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	SendReq("stop")
	socket.on("nodeLoaded",nodeLoaded)
	
}


function kill() {
	hidebuttons("start")
	showbuttons("restart")
	showbuttons("stop")
	showbuttons("button")
	showbuttons("button2")
	showbuttons("buttongrass")
	showbuttons("buttonfire")
	showbuttons("kill")
	showbuttons("killhalf")
	showbuttons("fireЕxtinguisher")
	showbuttons("buttonfireMan")


	setTimeout(() => { start(false); }, 200);
	
}

function nodeLoaded(){
	SendReq("killed")
	setTimeout(() => { window.location.replace("./index.html?action=killall") }, 3000);
}

function start(playsound) {
	if (playsound) {

		var audio = new Audio('./sound/243020__plasterbrain__game-start.ogg');
		audio.play();
	}

	hidebuttons("start")
	showbuttons("restart")
	showbuttons("stop")
	showbuttons("button")
	showbuttons("button2")
	showbuttons("buttongrass")
	showbuttons("buttonfire")
	showbuttons("kill")
	showbuttons("killhalf")
	showbuttons("fireЕxtinguisher")
	showbuttons("buttonfireMan")
	SendReq("size", size);
	letsGo();
}




function SendReq(Req, data = null) {
	socket.emit(Req, data);
}


socket.on('matrix', GetMatrix);

function GetMatrix(matr) {
	matrix = matr
		drawing();
}

const side = 10;

function setup() {
	frameRate(120)
	background("#222222")
}

function letsGo(){
	createCanvas(size * side, size * side)
	SendReq("cliReady");
	SendReq("newFrame");
}


function drawing() {

	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				fill("green")
			} else if (matrix[y][x] == 2) {
				fill("yellow")


			} else if (matrix[y][x] == 3) {
				fill("orange")
			} else if (matrix[y][x] == 4) {
				fill("red")
			} else if (matrix[y][x] == 5) {
				fill("white")
			}
			else if (matrix[y][x] == 6) {
				fill("magenta")
			}
			else {
				fill("#222222")
			}
			rect(x * side, y * side, side, side)
		}
	}
	SendReq("newFrame")
}
