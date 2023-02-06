var matrix = [];

function fireЕxtinguisher(){
	var audio = new Audio('./sound/Blastwave_FX_FireExtinguisher_BW.4175.ogg');
	audio.play();
	setTimeout(() => {generatorEat(10,5,size,fireEx,fireExArr)}, 300);
}

function createFire(){
	var audio = new Audio('./sound/feuer.ogg');
	audio.play();
	setTimeout(() => {generatorEat(10,3,size,Fire,fireArr)}, 1000);
}

function pred(){
	var audio = new Audio('./sound/T-Rex Attack - QuickSounds.com.ogg');
	audio.play();
	setTimeout(() => {generatorEat(5,4,size,GrassEaterEater,grassEatEatArr)}, 1000);
	setTimeout(() => {audio.pause();}, 5000);
}

function grass(){
	var audio = new Audio('./sound/Footsteps-in-grass-moderate-A-www.fesliyanstudios.com.ogg');
	audio.play();
	setTimeout(() => {generatorEat(100,1,size,Grass,grassArr)
		
	}, 1000);

	setTimeout(() => {audio.pause();}, 5000);
}

function herb(){
	var audio = new Audio('./sound/Indian Elephant 2 - QuickSounds.com.ogg');
	audio.play();
	setTimeout(() => {generatorEat(15,2,size,GrassEater,grassEatArr)}, 1000);
}




function killall(){
	for(let i=0;i<100;i++){
		setTimeout(() => {for (let gr in grassArr) {
			grassArr[gr].die()
		}}, 250);
	

		setTimeout(() => {for (var grE in grassEatArr) {
			grassEatArr[grE].die()
		}}, 500);
	

	setTimeout(() => {for (var grEE in grassEatEatArr) {
		grassEatEatArr[grEE].die()
	}}, 750);
	

	setTimeout(() => {for (var fire in fireArr) {
		fireArr[fire].die()
	}}, 1000);


	setTimeout(() => {for (var fireEx in fireExArr) {
		fireExArr[fireEx].die()
	}}, 1250);

	
	
}
//remove();
clear()
	console.log("killed")
}
function restart(){
	// killall()
	// // stop()
	// //erase();
	// setTimeout(() => {start()}, 3000);

	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	setTimeout(() => {window.location.replace("./index.html?action=restart")}, 3000);

	
	
}
function stop(){

	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	setTimeout(() => {window.location.replace("./index.html")}, 3000);
	
}
function killFire(){
	var audio = new Audio('./sound/Blastwave_FX_FireExtinguisher_BW.4175.ogg');
	audio.play();

	for(let i =0;i<10;i++){
	for (var fire in fireArr) {
		fireArr[fire].die()
	}
	}	
	console.log("killed fire")
}

function generator(size) {
for (let i = 0; i <= size; i++) {
		matrix.push([])
		for (let b = 0; b < size; b++) {
			matrix[i].push(0)
			
		}	 
	 }


    // for (let y = 0; y < count; y++) {
	// 	let x = Math.round( Math.random() * size);
	// let y = Math.round( Math.random() * size);
	
	// matrix[y][x] = 1
	// 	//console.log(x,y)
	// }
	
 
 
 }

 function generatorEat(count,color,size,ent,arr) {
	 console.log("cnvec")
    for (let y = 0; y < count; y++) {
		let x = Math.round( Math.random() * size );
	let y = Math.round( Math.random() * size );
	
	matrix[y][x] = color
	arr.push(new ent(x,y,1))
			//console.log(x,y)
	}
 }


//  function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

function showbuttons(id){
	var button = document.getElementById(id);
	
	// get the current value of the clock's display property
	var displaySetting = button.style.display;
	// now toggle the clock and the button text, depending on current state
	
	  // clock is visible. hide it
	  button.style.display = 'block';
	
}

function hidebuttons(id){
	var button = document.getElementById(id);
	
	// get the current value of the clock's display property
	var displaySetting = button.style.display;
	// now toggle the clock and the button text, depending on current state

	  // clock is visible. hide it
	  button.style.display = 'none';
	
}

function setkill(){

	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	setTimeout(() => {window.location.replace("./index.html?action=killall")}, 3000);
	
}


function kill()
{
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

	setTimeout(() => {letsGo()}, 250);



setTimeout(() => {generator(size)}, 500);
}

function start(playsound){
	if(playsound){
	//stop()
	var audio = new Audio('./sound/243020__plasterbrain__game-start.ogg');
	audio.play();
	}
	
	// addbuttons("restart","restart()","Restart")
	// addbuttons("stop","stop()","Stop")
	// addbuttons("button","generatorEat(15,2,size,GrassEater,grassEatArr)","GrassEater")
	// addbuttons("button2","generatorEat(5,4,size,GrassEaterEater,grassEatEatArr)","GrassEaterEater")
	// addbuttons("buttongrass","generatorEat(100,1,size,Grass,grassArr)","Grass")
	// addbuttons("buttonfire","generatorEat(10,3,size,Fire,fireArr)","Fire")
	// addbuttons("kill","killall()","kill All")
	// addbuttons("killhalf","killFire()","kill Fire")
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




		// get the clock

	  

	
	setTimeout(() => {letsGo()}, 250);



setTimeout(() => {generator(size)}, 500);
	
	

	setTimeout(() => {generatorEat(600,1,size,Grass,grassArr)}, 1000);
	setTimeout(() => {generatorEat(50,2,size,GrassEater,grassEatArr)}, 2000);
	
	setTimeout(() => {generatorEat(25,4,size,GrassEaterEater,grassEatEatArr)}, 9000);


	setTimeout(() => {generatorEat(10,3,size,Fire,fireArr)}, 14000);
	setTimeout(() => {generatorEat(60,5,size,fireEx,fireExArr)}, 40000);

	/*setTimeout(() => {
		killFire()
		for (let y = 0; y < matrix.length; y++) {
			//const element = array[y];
			for (let x = 0; x < matrix[y].length; x++) {
x = 5
			}

		}
	
	}, 60000);
	

	setTimeout(() => {

		for (let y = 0; y < matrix.length; y++) {
			//const element = array[y];
			for (let x = 0; x < matrix[y].length; x++) {
x = 0
			}

		}
	}, 70000);*/
	
	
}

function Downloadall(){


	download("matrix.lion",matrix,true)
	download("grassArr.lion",grassArr,false)
	download("grassEatArr.lion",grassEatArr,false)
	download("grassEatEatArr.lion",fireArr,false)
	download("fireExArr.lion",fireExArr,false)
	download("mull.lion",mull)
	download("play.lion",play)
}

function download(filename, text,isarr) {
if(isarr){
	let newFile =text.join("],[");

	var filein = "[["+newFile+"]]"
	
}else{
var filein = text
}

	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filein));
	element.setAttribute('download', filename);
  
	element.style.display = 'none';
	document.body.appendChild(element);
  
	element.click();
  
	document.body.removeChild(element);


	
  }


const size = 50
const grassArr = [];
const grassEatArr = [];
const grassEatEatArr = [];
const fireArr = [];
const fireExArr = [];
const side = 10;
var mull = 0;
var play = 0;
function letsGo(){
	//noStroke()
//start()
	
	frameRate(30)
	background("#222222")
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if(matrix[y][x]== 1){
				grassArr.push(new Grass(x,y,1))
			}		
		}
		
	}
	createCanvas(size * side , size * side )


	// for (let y = 0; y < matrix.length; y++) {
	// 	for (let x = 0; x < matrix[y].length; x++) {
	// 		if(matrix[y][x]== 1){
	// 			grassEatArr.push(new GrassEater(x,y,1))
	// 		}		
	// 	}
		
	// }
}


function draw(){
	
	for (let y = 0; y < matrix.length; y++) {
		//const element = array[y];
		for (let x = 0; x < matrix[y].length; x++) {
			//const element = array[x];
			if(matrix[y][x]== 1){
				fill("green")
			}else if(matrix[y][x]== 2){
				fill("yellow")
			
			
			}else if(matrix[y][x]== 3){
				fill("orange")
			}else if(matrix[y][x]==4){
fill("red")
			}else if(matrix[y][x]==5){
				fill("white")
			}
			else{
				fill("#222222")
			}
rect(x * side,y*side,side,side)
		}
	}

	for (let gr in grassArr) {
		grassArr[gr].mul()
	}
	for (var grE in grassEatArr) {
		grassEatArr[grE].eat()
	}
	for (var grEE in grassEatEatArr) {
		grassEatEatArr[grEE].eat()
	}
	for (var fire in fireArr) {
		fireArr[fire].eat()
	}
	for (var fireEx in fireExArr) {
		fireExArr[fireEx].eat()
	}

	
}

// var grass1 = new Grass(1,2,1)
// console.log(grass1)
// var emptyCells = grass1.chooseCell(0)
// console.log(emptyCells)