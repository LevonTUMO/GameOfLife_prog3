matrix = []
let generated =false;
let firstReady = true;
var express = require('express');

var fs = require('fs');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);


app.use(express.static("files"));

app.get('/', function (req, res) {

  res.redirect('index.html');

});

server.listen(3000);



grassArr = [];
grassEatArr = [];
grassEatEatArr = [];
fireArr = [];
fireExArr = [];
fireManArr = [];



function generator(size) {
  if(!generated){
    for (let i = 0; i <= size; i++) {
      matrix.push([])
      for (let b = 0; b < size; b++) {
        matrix[i].push(0)
  
      }
    }
    generated = true
  }
  
}

function generatorEat(count, color, size, ent, arr) {
  for (let f = 0; f < count; f++) {
    let i =0;
    do{
      
    var x = Math.round(Math.random() * size);
    var y = Math.round(Math.random() * size);
    // console.log(i)
    var entet = getEnt(x,y)
    if(entet){
      i++;
    }
    }while(entet && i <= 15)

    if(i>15){
      // console.log(entet)
      entet[0][entet[1]].die(entet[0])
      // console.log("killing")
    }
    
    matrix[y][x] = color
    arr.push(new ent(x, y, 1))
  }
}

function getEnt(x,y){
  for(var i in grassArr){
    if(grassArr[i].x==x && grassArr[i].y ==y){
      return [grassArr,i];
    }
  }
  for(var i in grassEatArr){
    if(grassEatArr[i].x==x && grassEatArr[i].y ==y){
      return [grassEatArr,i];
    }
  }
  for(var i in grassEatEatArr){
    if(grassEatEatArr[i].x==x && grassEatEatArr[i].y ==y){
      return [grassEatEatArr,i];
    }
  }
  for(var i in fireArr){
    if(fireArr[i].x==x && fireArr[i].y ==y){
      return [fireArr,i];
    }
  }
  for(var i in fireExArr){
    if(fireExArr[i].x==x && fireExArr[i].y ==y){
      return [fireExArr,i];
    }
  }
  for(var i in fireManArr){
    if(fireManArr[i].x==x && fireManArr[i].y ==y){
      return [fireManArr,i];
    }
  }

  return false;
}

const Fire = require("./files/fire");
const FireMan = require("./files/fireMan");
const fireEx = require("./files/fireEx");
const Grass = require("./files/Grass");
const GrassEater = require("./files/grassEater");
const GrassEaterEater = require("./files/grassEaterEater");
updateFileData();
io.on('connection', function (socket) {
  socket.emit("nodeLoaded", true);
  // console.log("nodeLoaded")
  function sendMatrix() {
    socket.emit("matrix", matrix);
  }


  socket.on("size", function (data) {
    size = data;
    generator(size)
    
    sendMatrix()
  });
  socket.on("cliReady", function (data) {
    // console.log(firstReady)
    if(firstReady){
      
      setTimeout(() => { generatorEat(600, 1, size, Grass, grassArr) }, 1000);

    setTimeout(() => { generatorEat(20, 2, size, GrassEater, grassEatArr) }, 3000);

    setTimeout(() => { generatorEat(10, 4, size, GrassEaterEater, grassEatEatArr) }, 10000);

    // setTimeout(() => { generatorEat(10, 3, size, Fire, fireArr) }, 30000);

    // setTimeout(() => { generatorEat(60, 5, size, fireEx, fireExArr) }, 50000);

    // setTimeout(() => { generatorEat(25, 4, size, GrassEaterEater, grassEatEatArr) }, 60000);

    // setTimeout(() => { generatorEat(60, 5, size, fireEx, fireExArr) }, 100000);
    firstReady =false
    }

    });
var mCOunt = 1;
  socket.on("newFrame", function (data) {
    
    WetherImpact(data)


   if(mCOunt == 1){
    mCOunt++
    sendMatrix();
    onframe();
   }else{
    sendMatrix();
    mCOunt--
   }
    
  
    
  })

  function WetherImpact(data){
    for(var i in grassArr){
      if(grassArr[i].mulTime != getSpeed(1,data)){
        // console.log(true)
        grassArr[i].mulTime = getSpeed(1,data);
      }
    }
    for(var i in grassEatArr){
      if(grassEatArr[i].mulTime != getSpeed(2,data)){
        grassEatArr[i].mulTime = getSpeed(2,data);
      }
    }
    for(var i in grassEatEatArr){
      if(grassEatEatArr[i].mulTime != getSpeed(4,data)){
        grassEatEatArr[i].mulTime = getSpeed(4,data);
      }
    }
    // for(var i in fireArr){
    //   if(fireArr[i].play != getSpeed(3,data)){
    //     fireArr[i].play += getSpeed(3);
    //   }
    // }
    // for(var i in fireExArr){
    //   if(fireExArr[i].play != getSpeed(5,data)){
    //     fireExArr[i].play += getSpeed(5);
    //   }
    // }
    // for(var i in fireManArr){
    //   if(fireManArr[i].energy != getSpeed(6,data)){
    //     fireManArr[i].energy += getSpeed(6);
    //   }
    // }
  }

  function getSpeed(id,data){
    if(id == 1){
      if(data == "Summer"){
        return 10;
      }
      if(data == "Autumn"){
        return 15;
      }
      if(data == "Winter"){
        return 20;
      }
      if(data == "Spring"){
        return 12;
      }
    }

    if(id == 2){
      if(data == "Summer"){
        return 20;
      }
      if(data == "Autumn"){
        return 25;
      }
      if(data == "Winter"){
        return 30;
      }
      if(data == "Spring"){
        return 22;
      }
    }

    // if(id == 3){
    //   if(data == "Summer"){
    //     return 0;
    //   }
    //   if(data == "Autumn"){
    //     return 5;
    //   }
    //   if(data == "Winter"){
    //     return 55;
    //   }
    //   if(data == "Spring"){
    //     return 10;
    //   }
    // }

    if(id == 4){
      if(data == "Summer"){
        return 20;
      }
      if(data == "Autumn"){
        return 25;
      }
      if(data == "Winter"){
        return 30;
      }
      if(data == "Spring"){
        return 22;
      }
    }
    // if(id == 5){
    //   if(data == "Summer"){
    //     return 0;
    //   }
    //   if(data == "Autumn"){
    //     return 5;
    //   }
    //   if(data == "Winter"){
    //     return 55;
    //   }
    //   if(data == "Spring"){
    //     return 10;
    //   }
    // }
    // if(id == 6){
    //   if(data == "Summer"){
    //     return 10;
    //   }
    //   if(data == "Autumn"){
    //     return 5;
    //   }
    //   if(data == "Winter"){
    //     return 2;
    //   }
    //   if(data == "Spring"){
    //     return 8;
    //   }
    // }
  }

  socket.on("retMatrix",function(){
    sendMatrix();
    
  })
  socket.on("killed", function (data) {
    firstReady = false
    // console.log("killed")
    socket.emit("killedSucc", null);
  })


  function onframe() {
    // console.log("onFrame")
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
    for (var fireMan in fireManArr) {
      fireManArr[fireMan].eat()
    }
    sendFileData(socket);
    // console.log(grassEatArr.length)
    
  }

  socket.on("console.log", function (data) {
    console.log(data)
  })

  socket.on("spawn", function (data) {

color = data[1]
  if(color==1){ 
    generatorEat(data[0], color, size,Grass,grassArr)
  }else if(color==2){
    generatorEat(data[0], color, size,GrassEater,grassEatArr)
  }else if(color==3){
    generatorEat(data[0], color, size,Fire,fireArr)
  }else if(color==4){
    generatorEat(data[0], color, size,GrassEaterEater,grassEatEatArr)
  }else if(color==5){
    generatorEat(data[0], color, size,fireEx,fireExArr)
  }else if(color==6){
    generatorEat(data[0], color, size,FireMan,fireManArr)
  }
    
  })
   
  socket.on("stop", function (data) {
process.on("exit", function () {
  require("child_process").spawn(process.argv.shift(), process.argv, {
      cwd: process.cwd(),
      detached : true,
      stdio: "inherit"
  });
});
process.exit();
  })

  socket.on("killfire", function (data) {

  for (let i = 0; i < 10; i++) {
		for (var fire in fireArr) {
			fireArr[fire].die(fireArr)
		}
	}

})



})



function updateFileData(){
  var jsonArr = {
  "Grass": 0,
  "GrassEater": 0,
  "GrassEaterEater": 0,
  "FireMan": 0,
  "fireEx": 0,
  "Fire": 0,
  "all": 0,
  "GrassLive": 0,
  "GrassEaterLive": 0,
  "GrassEaterEaterLive": 0,
  "FireManLive": 0,
  "fireExLive": 0,
  "FireLive": 0,
  "allLive": 0
}
var JsonString = JSON.stringify(jsonArr, null, 4);

fs.writeFileSync("statistics.json", JsonString);
}

function sendFileData(socket){
  var json = null;
  json = fs.readFileSync("statistics.json")
  var jsonArr = JSON.parse(json)

  socket.emit("stats", jsonArr);
}