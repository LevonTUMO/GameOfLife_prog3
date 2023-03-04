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
	showbuttons("stats")
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
	showbuttons("weather")
	SendReq("size", size);
	letsGo();
}




function SendReq(Req, data = null) {
	socket.emit(Req, data);
}

var got = false
socket.on('matrix', function(data){
	if(!got){
	matrix = data
	// console.log("matrix!!")
	got = true
	
		drawing();
	
	}else{
		got = false
		SendReq("retMatrix")
	}
	
	
		
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

// var badafs = 0;
function drawing() {
	// console.error(new Error("drawing is not defined ("+badafs+")"))
	// badafs++
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				fill(getColorForWeather(1))
			} else if (matrix[y][x] == 2) {
				fill(getColorForWeather(2))


			} else if (matrix[y][x] == 3) {
				fill(getColorForWeather(3))
			} else if (matrix[y][x] == 4) {
				fill(getColorForWeather(4))
			} else if (matrix[y][x] == 5) {
				fill(getColorForWeather(5))
			}
			else if (matrix[y][x] == 6) {
				fill(getColorForWeather(6))
			}
			else {
				fill(getColorForWeather(0))
			}
			rect(x * side, y * side, side, side)
		}
	}
	
	setTimeout(() => {SendReq("newFrame",getWeather())},setfps(30));
}
function getWeather(){
	var weather = document.getElementById("weather").value;
	return weather;
}
function getColorForWeather(id){
	var weather = getWeather();
	var colorID = null
		if(weather=="Summer"){
			colorID =0
		document.getElementById("button").style.backgroundColor = getcolors(2)[colorID]
		document.getElementById("button2").style.backgroundColor = getcolors(4)[colorID]
		document.getElementById("buttongrass").style.backgroundColor = getcolors(1)[colorID]
		document.getElementById("buttonfire").style.backgroundColor = getcolors(3)[colorID]
		document.getElementById("buttonfireMan").style.backgroundColor = getcolors(6)[colorID]
		document.getElementById("fireЕxtinguisher").style.backgroundColor = getcolors(5)[colorID]

		document.getElementById("button").innerHTML = "herbivorous (MulSpeed: "+10+")"
		document.getElementById("button2").innerHTML = "predator (MulSpeed: "+20+")"
		document.getElementById("buttongrass").innerHTML = "Grass (MulSpeed: "+20+")"
	

		document.getElementById("body").style.backgroundColor = getcolors(0)[colorID]


		return getcolors(id)[colorID]
	}
	if(weather=="Autumn"){
		colorID =1
		document.getElementById("button").style.backgroundColor = getcolors(2)[colorID]
		document.getElementById("button2").style.backgroundColor = getcolors(4)[colorID]
		document.getElementById("buttongrass").style.backgroundColor = getcolors(1)[colorID]
		document.getElementById("buttonfire").style.backgroundColor = getcolors(3)[colorID]
		document.getElementById("buttonfireMan").style.backgroundColor = getcolors(6)[colorID]
		document.getElementById("fireЕxtinguisher").style.backgroundColor = getcolors(5)[colorID]

		document.getElementById("button").innerHTML = "herbivorous (MulSpeed: "+15+")"
		document.getElementById("button2").innerHTML = "predator (MulSpeed: "+25+")"
		document.getElementById("buttongrass").innerHTML = "Grass (MulSpeed: "+25+")"

		document.getElementById("body").style.backgroundColor = getcolors(0)[colorID]

		return getcolors(id)[colorID]
	}
	if(weather=="Winter"){
		colorID =2
		document.getElementById("button").style.backgroundColor = getcolors(2)[colorID]
		document.getElementById("button2").style.backgroundColor = getcolors(4)[colorID]
		document.getElementById("buttongrass").style.backgroundColor = getcolors(1)[colorID]
		document.getElementById("buttonfire").style.backgroundColor = getcolors(3)[colorID]
		document.getElementById("buttonfireMan").style.backgroundColor = getcolors(6)[colorID]
		document.getElementById("fireЕxtinguisher").style.backgroundColor = getcolors(5)[colorID]

		document.getElementById("button").innerHTML = "herbivorous (MulSpeed: "+20+")"
		document.getElementById("button2").innerHTML = "predator (MulSpeed: "+30+")"
		document.getElementById("buttongrass").innerHTML = "Grass (MulSpeed: "+30+")"

		document.getElementById("body").style.backgroundColor = getcolors(0)[colorID]

		return getcolors(id)[colorID]
	}
	if(weather=="Spring"){
		colorID =3
		document.getElementById("button").style.backgroundColor = getcolors(2)[colorID]
		document.getElementById("button2").style.backgroundColor = getcolors(4)[colorID]
		document.getElementById("buttongrass").style.backgroundColor = getcolors(1)[colorID]
		document.getElementById("buttonfire").style.backgroundColor = getcolors(3)[colorID]
		document.getElementById("buttonfireMan").style.backgroundColor = getcolors(6)[colorID]
		document.getElementById("fireЕxtinguisher").style.backgroundColor = getcolors(5)[colorID]


		document.getElementById("button").innerHTML = "herbivorous (MulSpeed: "+12+")"
		document.getElementById("button2").innerHTML = "predator (MulSpeed: "+22+")"
		document.getElementById("buttongrass").innerHTML = "Grass (MulSpeed: "+22+")"
		
		document.getElementById("body").style.backgroundColor = getcolors(0)[colorID]

		return getcolors(id)[colorID]
	}
}

function getcolors(id){
	var zero = ["#222222","#454545","#808080","#333333"]
	var one = ["#10A702","#99CC32","#87C27D","#21E004"]
	var two = ["yellow","#EEC900","#FBEC5D","#D4D420"]
	var three = ["orange","orange","orange","orange"]
	var four = ["red","#7A0606","#EE8787","#F0273A"]
	var five = ["white","white","#D2C9CA","white"]
	var six = ["magenta","#A0086B","#FF00FF	","#AA3581"]

	if(id == 0){
		return zero
	}
	if(id == 1){
		return one
	}
	if(id == 2){
		return two
	}
	if(id == 3){
		return three
	}
	if(id == 4){
		return four
	}
	if(id == 5){
		return five
	}
	if(id == 6){
		return six
	}

}

function setfps(fps){
	return 1000/fps
}


socket.on("stats",function(data){
	let GrassVal = document.getElementById("GrassVal")
	let GrassEaterVal = document.getElementById("GrassEaterVal")
	let GrassEaterEaterVal = document.getElementById("GrassEaterEaterVal")
	let FireManVal = document.getElementById("FireManVal")
	let fireExVal = document.getElementById("fireExVal")
	let FireVal = document.getElementById("FireVal")
	let allVal = document.getElementById("allVal")

	let GrassValLive = document.getElementById("GrassValLive")
	let GrassEaterValLive = document.getElementById("GrassEaterValLive")
	let GrassEaterEaterValLive = document.getElementById("GrassEaterEaterValLive")
	let FireManValLive = document.getElementById("FireManValLive")
	let fireExValLive = document.getElementById("fireExValLive")
	let FireValLive = document.getElementById("FireValLive")
	let allValLive = document.getElementById("allValLive")

	GrassValLive.innerHTML = data["GrassLive"]
	GrassEaterValLive.innerHTML = data["GrassEaterLive"]
	GrassEaterEaterValLive.innerHTML = data["GrassEaterEaterLive"]
	FireManValLive.innerHTML = data["FireManLive"]
	fireExValLive.innerHTML = data["fireExLive"]
	FireValLive.innerHTML = data["FireLive"]
	allValLive.innerHTML = data["allLive"]

	GrassVal.innerHTML = data["Grass"]
	GrassEaterVal.innerHTML = data["GrassEater"]
	GrassEaterEaterVal.innerHTML = data["GrassEaterEater"]
	FireManVal.innerHTML = data["FireMan"]
	fireExVal.innerHTML = data["fireEx"]
	FireVal.innerHTML = data["Fire"]
	allVal.innerHTML = data["all"]

})