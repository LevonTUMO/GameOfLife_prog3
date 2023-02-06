class Fire {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.mulEnergy = 120;
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
        const newCell = random(this.chooseCell(1));  
        const newCell2 = random(this.chooseCell(2));  
        const newCell3 = random(this.chooseCell(4));  
        if(newCell2){
            var newX = newCell2[0]
var newY = newCell2[1]
matrix[newY][newX] = 3

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

this.energy++
        
for(var i in grassEatArr){
    if(newX == grassEatArr[i].x && newY == grassEatArr[i].y){
grassEatArr.splice(i,1)
break;
    }
}
if(this.energy >= this.mulEnergy){
    this.mulGEat();
}
        } else if(newCell3){
            var newX = newCell3[0]
var newY = newCell3[1]
matrix[newY][newX] = 3

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

this.energy++
        
for(var i in fireArr){
    if(newX == grassEatEatArr[i].x && newY == grassEatEatArr[i].y){
grassEatEatArr.splice(i,1)
break;
    }
}
if(this.energy >= this.mulEnergy){
    this.mulGEat();
}
        }else if(newCell){
            var newX = newCell[0]
var newY = newCell[1]
matrix[newY][newX] = 3

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

this.energy++
        
for(var i in fireArr){
    if(newX == grassArr[i].x && newY == grassArr[i].y){
grassArr.splice(i,1)
break;
    }
}
if(this.energy >= this.mulEnergy){
    this.mulGEat();
}
        }else{
            this.play++
            
            if(this.play > this.dieEnergy){
                this.die()
            }

            
           // this.move();
        }
    }



    
move(){
        
        const newCell = random(this.chooseCell(0));
        //const newCell2 = random(this.chooseCell(0));
if(newCell){
var newX = newCell[0]
var newY = newCell[1]
matrix[newY][newX] = 3

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
if(this.play < this.dieEnergy){
    this.die()
}
        

    }

    die(){
        for(var i  in fireArr){
            if(this.x == fireArr[i].x && this.y ==fireArr[i].y){
                fireArr.splice(i,1)
                break;
            }
            
                }
                mull --
                matrix[this.y][this.x] = 0
            }

    


     mulGEat(){
    
         const newCell = random(this.chooseCell(0));
         if(newCell && this.energy >= this.mulEnergy && mull <= 100){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            fireArr.push(new Fire(newX, newY,this.energy,this.mulEnergy))
            this.energy = this.defEnergy
            play ++
            mull ++
           // console.log(play)
            if(play == this.killer){
                killall();
                play = 0;
            
        }
         }
     }
}