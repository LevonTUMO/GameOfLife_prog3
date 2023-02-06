class fireEx {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
        this.mulEnergy = 100;
        this.defEnergy = 5;
        this.dieEnergy = 50;
        this.play = 0
        this.killer = 0;
    }

getNewCords(){
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}




    chooseCell(character) {
        this.getNewCords()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x>= 0&& x < matrix[0].length && y>= 0 && y < matrix.length) {
            
            
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
    }
        return found;

        
     }


    eat(){
        const newCell = random(this.chooseCell(3));  


        if(newCell){
            var newX = newCell[0]
var newY = newCell[1]
matrix[newY][newX] = 5

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

this.energy+=10
mull--
        
for(var i in fireArr){
    if(newX == fireArr[i].x && newY == fireArr[i].y){
fireArr.splice(i,1)
break;
    }
}
if(this.energy >= this.mulEnergy){
   // this.mulGEat();
}
        } else{
            // this.play++
            
            // if(this.play > this.dieEnergy){
            //     this.die()
            // }

            
            this.move();
        }
    }



    
move(){
       
        const newCell = random(this.chooseCell(1));
        //const newCell2 = random(this.chooseCell(0));
if(newCell){
var newX = newCell[0]
var newY = newCell[1]
matrix[newY][newX] = 5

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

this.play ++
}/*else if(newCell2){
    var newX = newCell[0]
    var newY = newCell[1]
    matrix[newY][newX] = 2
    
    matrix[this.y][this.x] = 2;
    
    this.x = newX
    this.y = newY
    
    this.energy-- 
}*/
if(this.play > this.dieEnergy){
    this.die()
}
        

    }

    die(){
        for(var i  in fireExArr){
            if(this.x == fireExArr[i].x && this.y ==fireExArr[i].y){
                fireExArr.splice(i,1)
                break;
            }
            
                }
                matrix[this.y][this.x] = 0
            }

    


     mulGEat(){
    
         const newCell = random(this.chooseCell(0));
         if(newCell && this.energy >= this.mulEnergy){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 5
            fireExArr.push(new Fire(newX, newY,this.energy,this.mulEnergy))
            this.energy = this.defEnergy
            play ++
           // console.log(play)
            if(play == this.killer){
                killall();
                play = 0;
            
        }
         }
     }
}