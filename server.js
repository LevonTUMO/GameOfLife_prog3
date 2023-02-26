matrix = []
var generated =false;
var firstReady = true;
var firemanCount = 0;
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
    let x = Math.round(Math.random() * size);
    let y = Math.round(Math.random() * size);
    matrix[y][x] = color
    arr.push(new ent(x, y, 1))
  }
}



const Fire = require("./files/fire");
const FireMan = require("./files/fireMan");
const fireEx = require("./files/fireEx");
const Grass = require("./files/Grass");
const GrassEater = require("./files/grassEater");
const GrassEaterEater = require("./files/grassEaterEater");

io.on('connection', function (socket) {
  socket.emit("nodeLoaded", true);

  function sendMatrix() {
    socket.emit("matrix", matrix);
  }


  socket.on("size", function (data) {
    size = data;
    generator(size)
    sendMatrix()
  });
  socket.on("cliReady", function (data) {

    if(firstReady){
      setTimeout(() => { generatorEat(600, 1, size, Grass, grassArr) }, 1000);

    setTimeout(() => { generatorEat(50, 2, size, GrassEater, grassEatArr) }, 3000);

    setTimeout(() => { generatorEat(25, 4, size, GrassEaterEater, grassEatEatArr) }, 20000);

    setTimeout(() => { generatorEat(10, 3, size, Fire, fireArr) }, 30000);

    setTimeout(() => { generatorEat(60, 5, size, fireEx, fireExArr) }, 50000);

    setTimeout(() => { generatorEat(25, 4, size, GrassEaterEater, grassEatEatArr) }, 60000);

    setTimeout(() => { generatorEat(60, 5, size, fireEx, fireExArr) }, 100000);
    firstReady =false
    }

    });

  socket.on("newFrame", function (data) {
    sendMatrix();
    onframe();
  })

  socket.on("killed", function (data) {
    firstReady = false
  })


  function onframe() {
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

    updateFileData();
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
    firemanCount += 3;
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
  fs.writeFileSync("statistics.json", '{\n\t"FireMan spawned": '+firemanCount+'\n}');
}