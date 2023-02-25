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
    }


    eat() {
        const newCell = random(this.chooseCell(1));
        const newCell2 = random(this.chooseCell(2));
        const newCell3 = random(this.chooseCell(4));
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
                    grassEatArr.splice(i, 1)
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
                    grassEatEatArr.splice(i, 1)
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
                    grassArr.splice(i, 1)
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




    move() {

        const newCell = random(this.chooseCell(0));
        //const newCell2 = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.play++
        }/*else if(newCell2){
    var newX = newCell[0]
    var newY = newCell[1]
    matrix[newY][newX] = 2
    
    matrix[this.y][this.x] = 2;
    
    this.x = newX
    this.y = newY
    
    this.energy-- 
}*/
        if (this.play < this.dieEnergy) {
            this.die(fireArr)
        }


    }

    mulGEat() {

        const newCell = random(this.chooseCell(0));
        if (newCell && this.energy >= this.mulEnergy && mull <= 100) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 3
            fireArr.push(new Fire(newX, newY, this.energy, this.mulEnergy))
            this.energy = this.defEnergy
            play++
            mull++
            // console.log(play)
            if (play == this.killer) {
                killall();
                play = 0;

            }
        }
    }
}