matrix = []
const size = 50
generator(size);
var express = require('express');

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



 function generator(size) {
   for (let i = 0; i <= size; i++) {
       matrix.push([])
       for (let b = 0; b < size; b++) {
         matrix[i].push(0)
         
       }	 
      }
      
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

   

    LivingCreature = require("./files/live");
    fire = require("./files/fire");
    fireEx =require("./files/fireEx");
    grass  =require("./files/Grass");
    grassEater =require("./files/grassEater");
    grassEaterEater = require("./files/grassEaterEater");

    io.on('connection', function (socket) {

     socket.emit("display message", [matrix,size]);
     
       
       setTimeout(() => {generator(size)}, 250);

       setTimeout(() => {letsGo()}, 500);


function letsGo(){
  socket.emit("display message", [matrix,size]);
}
     
         
         
       
         setTimeout(() => {generatorEat(600,1,size,Grass,grassArr)}, 1000);
         setTimeout(() => {generatorEat(50,2,size,GrassEater,grassEatArr)}, 3000);
         
         setTimeout(() => {generatorEat(25,4,size,GrassEaterEater,grassEatEatArr)}, 20000);
       
       
         setTimeout(() => {generatorEat(10,3,size,Fire,fireArr)}, 30000);
         setTimeout(() => {generatorEat(60,5,size,fireEx,fireExArr)}, 50000);
       
         setTimeout(() => {generatorEat(25,4,size,GrassEaterEater,grassEatEatArr)}, 60000);
       
         setTimeout(() => {generatorEat(60,5,size,fireEx,fireExArr)}, 100000);



         function onframe(){
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
      
    });