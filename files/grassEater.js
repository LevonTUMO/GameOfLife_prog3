var LivingCreature = require("./live")
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y, 1);
        this.energy = 20;
        this.mulEnergy = 50;
        this.defEnergy = 10;
        this.mulTime = 20;
        super.addStatistics("GrassEater")
    }



    eat() {
        this.liveMulTime++
        const newCell = super.random(this.chooseCell(1));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    // grassArr.splice(i, 1)
                    // break;
                    grassArr[i].die(grassArr)
                    matrix[newY][newX] = 2

                    matrix[this.y][this.x] = 0;

                    this.x = newX
                    this.y = newY

                    this.energy++
                    break
                }
            }



            if (this.energy >= this.mulEnergy) {
                this.mulGEat();
            }

        } else {
            this.move();
        }
    }




    move() {

        const newCell = super.random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.energy--
        }
        if (this.energy < this.dieEnergy) {
            this.die(grassEatArr)
        }


    }






    mulGEat() {
        if(this.ser == 'm'){
            return;
        }

        var newCell = null;
        var newCell1 = null;
        const anGrassEater = super.random(this.chooseCell(2));
        if (anGrassEater && this.energy >= this.mulEnergy) {
            
            for (var i in grassEatArr) {
                if (grassEatArr[i].x == anGrassEater[0] && grassEatArr[i].y == anGrassEater[1]) {
                    var newGrassEat = grassEatArr[i]
                    
                    break
                }
            }
            
            if (newGrassEat.energy >= newGrassEat.mulEnergy && newGrassEat.ser != this.ser && newGrassEat.mulTime <= newGrassEat.liveMulTime) {
                newCell = super.random(this.chooseCell(0));
                newCell1 = super.random(this.chooseCell(1));
                
                
            }
        }
        if (newCell != null) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2
            grassEatArr.push(new GrassEater(newX, newY, this.energy, this.mulEnergy))
            this.energy = this.defEnergy
            this.liveMulTime = this.mulTime;
            newGrassEat.liveMulTime == newGrassEat.mulTime
            newGrassEat.energy = newGrassEat.defEnergy;
            
        }

        if (newCell1 != null) {
            var newX = newCell1[0]
            var newY = newCell1[1]
            matrix[newY][newX] = 2
            grassEatArr.push(new GrassEater(newX, newY, this.energy, this.mulEnergy))
            this.energy = this.defEnergy
            this.liveMulTime = this.mulTime;
            newGrassEat.liveMulTime == newGrassEat.mulTime
            newGrassEat.energy = newGrassEat.defEnergy;
            

        }

    }
}