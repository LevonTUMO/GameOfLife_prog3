var LivingCreature = require("./live")
module.exports = class Fire extends LivingCreature {
    constructor(x, y) {
        super(x, y, 1)
        this.energy = 5;
        this.mulEnergy = 120;
        this.defEnergy = 5;
        this.dieEnergy = 50;
        this.play = 0
        this.killer = 0;
        super.addStatistics("Fire")
    }


    eat() {
        const newCell = super.random(this.chooseCell(1));
        const newCell2 = super.random(this.chooseCell(2));
        const newCell3 = super.random(this.chooseCell(4));
        if (newCell2) {
            var newX = newCell2[0]
            var newY = newCell2[1]
            matrix[newY][newX] = 3

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.energy++

            for (var i in grassEatArr) {
                if (newX == grassEatArr[i].x && newY == grassEatArr[i].y) {
                    grassEatArr[i].die(grassEatArr)
                    break;
                }
            }
            if (this.energy >= this.mulEnergy) {
                this.mulGEat();
            }
        } else if (newCell3) {
            var newX = newCell3[0]
            var newY = newCell3[1]
            matrix[newY][newX] = 3

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.energy++

            for (var i in fireArr) {
                if (newX == grassEatEatArr[i].x && newY == grassEatEatArr[i].y) {
                    grassEatEatArr[i].die(grassEatEatArr)
                    break;
                }
            }
            if (this.energy >= this.mulEnergy) {
                this.mulGEat();
            }
        } else if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.energy++

            for (var i in fireArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr[i].die(grassArr)
                    break;
                }
            }
            if (this.energy >= this.mulEnergy) {
                this.mulGEat();
            }
        } else {
            this.play++

            if (this.play > this.dieEnergy) {
                this.die(fireArr)
            }


            // this.move();
        }
    }


    mulGEat() {

        const newCell = super.random(this.chooseCell(0));
        if (newCell && this.energy >= this.mulEnergy) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            fireArr.push(new Fire(newX, newY, this.energy, this.mulEnergy))
            this.energy = this.defEnergy
        }
    }
}