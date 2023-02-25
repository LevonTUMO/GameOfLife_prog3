var LivingCreature = require("./live")
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y,1);
        this.energy = 10;
        this.mulEnergy = 50;
        this.defEnergy = 5;
    }

    

    eat() {
        const newCell = random(this.chooseCell(1));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.energy++

            for (var i in grassEatArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
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

        const newCell = random(this.chooseCell(0));
        const newCell2 = random(this.chooseCell(2));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.energy--
        } else if (newCell2) {
            var newX = newCell2[0]
            var newY = newCell2[1]
            matrix[newY][newX] = 2

            matrix[this.y][this.x] = 2;

            this.x = newX
            this.y = newY

            this.energy--
        }
        if (this.energy < this.dieEnergy) {
            this.die(grassEatArr)
        }


    }






    mulGEat() {

        const newCell = random(this.chooseCell(0));
        if (newCell && this.energy >= this.mulEnergy) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2
            grassEatArr.push(new GrassEater(newX, newY, this.energy, this.mulEnergy))
            this.energy = this.defEnergy


        }
    }
}