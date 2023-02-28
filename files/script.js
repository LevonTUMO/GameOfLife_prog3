var socket = io();
var matrix = [];
var first = true;
const size = 50;

const side = 500/size;

function fireЕxtinguisher() {
	var audio = new Audio('./sound/FireExtinguisher.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [10, 5]) }, 300);
}

function createFire() {
	var audio = new Audio('./sound/fire.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [10, 3]) }, 1000);
}

function createFireMan() {
	var audio = new Audio('./sound/FIRE-TRUCK.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [3, 6]) }, 1000);
}


function pred() {
	var audio = new Audio('./sound/T-Rex.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [5, 4]) }, 1000);
	setTimeout(() => { audio.pause(); }, 5000);
}

function grass() {
	var audio = new Audio('./sound/grass.ogg');
	audio.play();
	setTimeout(() => {
		SendReq("spawn", [100, 1])

	}, 1000);

	setTimeout(() => { audio.pause(); }, 5000);
}

function herb() {
	var audio = new Audio('./sound/Elephant.ogg');
	audio.play();
	setTimeout(() => { SendReq("spawn", [15, 2]) }, 1000);
}


function restart() {
	var audio = new Audio('./sound/drum-hit.ogg');
	audio.play();
	setTimeout(() => {SendReq("stop")},1500);
	// SendReq("stop")
	// setTimeout(() => { window.location.replace("./index.html?action=restart") }, 3000);
	// setTimeout(() => {start(false)},1500);
	socket.on("nodeLoaded",function(){
		window.location.replace("./index.html?action=noStart")
	})
}
function stop() {
	var audio = new Audio('./sound/drum-hit.ogg');
	audio.play();
	setTimeout(() => {SendReq("stop")},2000);
	socket.on("nodeLoaded",function(){
		window.location.replace("./index.html")
	})
	
}
function killFire() {
	var audio = new Audio('./sound/FireExtinguisher.ogg');
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

	var audio = new Audio('./sound/drum-hit.ogg');
	audio.play();
	setTimeout(() => {SendReq("stop")},1500);
	socket.on("nodeLoaded",function(){
		SendReq("killed")
	
		socket.on("killedSucc",function(){
			window.location.replace("./index.html?action=noStart")
			
	})
	})
	
}


function start(playsound) {
	if (playsound) {

		var audio = new Audio('./sound/game-start.ogg');
		audio.play();
	}
	// SendReq("console.log","start")

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


socket.on('matrix', function(data){
	matrix = data
		drawing();
});


function setup() {
	frameRate(30)
	background("#222222")
}

function letsGo(){
	createCanvas((size * side), size * side)
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
	
	setTimeout(() => {SendReq("newFrame")},setfps(30));
}

function setfps(fps){
	return 1000/fps
}
