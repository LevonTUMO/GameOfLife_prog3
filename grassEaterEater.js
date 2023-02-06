class GrassEaterEater {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.energy = 50;
        this.directions = [];
        this.mulEnergy = 70;
        this.defEnergy = 5;
        this.dieEnergy = 0;
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
        const newCell = random(this.chooseCell(2));  
       // const newCell1 = random(this.chooseCell(1));  
        if(newCell){
            var newX = newCell[0]
var newY = newCell[1]
matrix[newY][newX] = 4

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
        }/*else if (newCell1){
            var newX = newCell1[0]
var newY = newCell1[1]
matrix[newY][newX] = 4

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

// this.energy = this.energy + 0.05
        
for(var i in grassEatEatArr){
    if(newX == grassArr[i].x && newY == grassArr[i].y){
grassArr.splice(i,1)
break;
    }
}
if(this.energy >= this.mulEnergy){
    this.mulGEat();
}
        }*/
        else{
            this.move();
        }
    }



    
move(){
        
        const newCell = random(this.chooseCell(0));
        const newCell2 = random(this.chooseCell(1));
        const newCell3 = random(this.chooseCell(4));
        
if(newCell){
var newX = newCell[0]
var newY = newCell[1]
matrix[newY][newX] = 4

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

this.energy--
}else if(newCell2){
    var newX = newCell2[0]
var newY = newCell2[1]
matrix[newY][newX] = 4

matrix[this.y][this.x] = 1;

this.x = newX
this.y = newY

this.energy = this.energy -= 0.25
}else if(newCell3){
    var newX = newCell3[0]
var newY = newCell3[1]
matrix[newY][newX] = 4

matrix[this.y][this.x] = 1;

this.x = newX
this.y = newY

this.energy --
}
if(this.energy < this.dieEnergy){
    this.die()
}
        

    }

    die(){
        for(var i  in grassEatEatArr){
            if(this.x == grassEatEatArr[i].x && this.y ==grassEatEatArr[i].y){
                grassEatEatArr.splice(i,1)
                break;
            }
            
                }
                matrix[this.y][this.x] = 0
            }

    


     mulGEat(){
    
         const newCell = random(this.chooseCell(0));
         const newCell1 = random(this.chooseCell(1));
         const newCell2 = random(this.chooseCell(2));
         if(newCell && this.energy >= this.mulEnergy){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            grassEatEatArr.push(new GrassEaterEater(newX, newY,this.energy,this.mulEnergy))
            this.energy = this.defEnergy
            if(this.mulEnergy < 200){
                this.mulEnergy++
                }
         }else if(newCell1 && this.energy >= this.mulEnergy){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            grassEatEatArr.push(new GrassEaterEater(newX, newY,this.energy,this.mulEnergy))
            this.energy = this.defEnergy
            if(this.mulEnergy < 200){
            this.mulEnergy++
            }
         }
         else if(newCell2 && this.energy >= this.mulEnergy){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            grassEatEatArr.push(new GrassEaterEater(newX, newY,this.energy,this.mulEnergy))
            this.energy = this.defEnergy
            if(this.mulEnergy < 200){
                this.mulEnergy++
                }
         }
     }
}