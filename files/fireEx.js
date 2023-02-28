var LivingCreature = require("./live")
module.exports = class fireEx extends LivingCreature {
    constructor(x, y) {
        super(x, y, 1);
        this.energy = 10;
        this.mulEnergy = 100;
        this.defEnergy = 5;
        this.dieEnergy = 50;
        this.play = 0
        this.killer = 0;
        super.addStatistics("fireEx")
    }






    eat() {
        const newCell = super.random(this.chooseCell(3));


        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 5

            matrix[this.y][this.x] = 0;
           
            this.x = newX
            this.y = newY

            this.energy += 10
            // mull--

            for (var i in fireArr) {
                if (newX == fireArr[i].x && newY == fireArr[i].y) {
                    fireArr[i].die(fireArr)
                    break;
                }
            }
            if (this.energy >= this.mulEnergy) {
                // this.mulGEat();
            }
        } else {
            // this.play++

            // if(this.play > this.dieEnergy){
            //     this.die()
            // }


            this.move();
        }
    }




    move() {

        const newCell = super.random(this.chooseCell(1));
        const newCell2 = super.random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 5

            matrix[this.y][this.x] = 1;

            this.x = newX
            this.y = newY

            this.play++
        } else if (newCell2) {
            var newX = newCell2[0]
            var newY = newCell2[1]
            matrix[newY][newX] = 5

            matrix[this.y][this.x] = 0;

            this.x = newX
            this.y = newY

            this.energy--
        }
        if (this.play > this.dieEnergy) {
            this.die(fireExArr)
        }


    }


    mulGEat() {

        const newCell = super.random(this.chooseCell(0));
        if (newCell && this.energy >= this.mulEnergy) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 5
            fireExArr.push(new Fire(newX, newY, this.energy, this.mulEnergy))
            this.energy = this.defEnergy
            play++
            // console.log(play)
            if (play == this.killer) {
                killall();
                play = 0;

            }
        }
    }
}