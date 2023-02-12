class GrassEaterEater extends LivingCreature{
    constructor(x, y){
        super(x,y,1);
        this.energy = 60;
        this.mulEnergy = 75;
        this.defEnergy = 5;
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
    this.die(grassEatEatArr)
}
        

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