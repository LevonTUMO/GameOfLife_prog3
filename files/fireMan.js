var LivingCreature = require("./live")
var fireEx = require("./fireEx")
module.exports = class FireMan extends LivingCreature {
    constructor(x, y) {
        super(x, y,1);
        this.energy = 10;
        this.maxenergy = 15;
        this.defEnergy = 5;
        
    }

    

    eat() {
        const newCell = super.random(this.chooseCell(2));
        if (newCell && this.energy < this.maxenergy) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 6

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.energy++

            for (var i in fireManArr) {
                if (newX == grassEatArr[i].x && newY == grassEatArr[i].y) {
                    grassEatArr.splice(i, 1)
                    break;
                }
            }
        } else {
            this.move();
        }
    }




    move() {

        const newCell = super.random(this.chooseCell(0));
        const newCell2 = super.random(this.chooseCell(1));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 6

            fireExArr.push(new fireEx(this.x,this.y));

            this.x = newX
            this.y = newY

            this.energy--
        } else if (newCell2) {
            var newX = newCell2[0]
            var newY = newCell2[1]
            matrix[newY][newX] = 6

            fireExArr.push(new fireEx(this.x,this.y));

            this.x = newX
            this.y = newY

            this.energy--

            for (var i in fireManArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
        }
        if (this.energy < this.dieEnergy) {
            this.die(fireManArr)
        }


    }


}