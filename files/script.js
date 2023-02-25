var socket = io();
var matrix = [];
var size = 0;
function fireЕxtinguisher() {
	var audio = new Audio('./sound/Blastwave_FX_FireExtinguisher_BW.4175.ogg');
	audio.play();
	setTimeout(() => { SendReq(["spawn", [10, 5, size, fireEx, fireExArr]]) }, 300);
}

function createFire() {
	var audio = new Audio('./sound/feuer.ogg');
	audio.play();
	setTimeout(() => { SendReq(["spawn", [10, 3, size, Fire, fireArr]]) }, 1000);
}

function pred() {
	var audio = new Audio('./sound/T-Rex Attack - QuickSounds.com.ogg');
	audio.play();
	setTimeout(() => { SendReq(["spawn", [5, 4, size, GrassEaterEater, grassEatEatArr]]) }, 1000);
	setTimeout(() => { audio.pause(); }, 5000);
}

function grass() {
	var audio = new Audio('./sound/Footsteps-in-grass-moderate-A-www.fesliyanstudios.com.ogg');
	audio.play();
	setTimeout(() => {
		SendReq(["spawn", [100, 1, size, Grass, grassArr]])

	}, 1000);

	setTimeout(() => { audio.pause(); }, 5000);
}

function herb() {
	var audio = new Audio('./sound/Indian Elephant 2 - QuickSounds.com.ogg');
	audio.play();
	setTimeout(() => { SendReq(["spawn", [15, 2, size, GrassEater, grassEatArr]]) }, 1000);
}


function restart() {
	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	setTimeout(() => { window.location.replace("./index.html?action=restart") }, 3000);
}
function stop() {
	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	setTimeout(() => { window.location.replace("./index.html") }, 3000);
}
function killFire() {
	var audio = new Audio('./sound/Blastwave_FX_FireExtinguisher_BW.4175.ogg');
	audio.play();
	for (let i = 0; i < 10; i++) {
		for (var fire in fireArr) {
			fireArr[fire].die(fireArr)
		}
	}
	console.log("killed fire")
}



function SendReq(Req) {
	socket.emit("send message", Req);
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
	setTimeout(() => { window.location.replace("./index.html?action=killall") }, 3000);

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


	SendReq(["killed"])
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

	setTimeout(() => {
		socket.on('display message', GetFromServer);
	}, 250);



	function GetFromServer(msg) {
		console.log(msg);
		matrix = msg[0][0]
		size = msg[0][1]
	}
}

const side = 10;
var mull = 0;
var play = 0;
function letsGo() {
	frameRate(120)
	background("#222222")
	createCanvas(size * side, size * side)
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
			else {
				fill("#222222")
			}
			rect(x * side, y * side, side, side)
		}
	}
}
