class GrassEater extends LivingCreature {
    constructor(x, y) {
        super();
        super.x = x;
        super.y = y;
        super.energy = 10;
        super.mulEnergy = 50;
        super.defEnergy = 5;
    }

    getNewCords() {
        super.directions = [
            [super.x - 1, super.y - 1],
            [super.x, super.y - 1],
            [super.x + 1, super.y - 1],
            [super.x - 1, super.y],
            [super.x + 1, super.y],
            [super.x - 1, super.y + 1],
            [super.x, super.y + 1],
            [super.x + 1, super.y + 1]
        ];
    }


    eat() {
        const newCell = random(super.chooseCell(1));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2

            matrix[super.y][super.x] = 0;

            super.x = newX
            super.y = newY

            super.energy++

            for (var i in grassEatArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            if (super.energy >= super.mulEnergy) {
                this.mulGEat();
            }
        } else {
            this.move();
        }
    }




    move() {

        const newCell = random(super.chooseCell(0));
        const newCell2 = random(super.chooseCell(2));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2

            matrix[super.y][super.x] = 0;

            super.x = newX
            super.y = newY

            super.energy--
        } else if (newCell2) {
            var newX = newCell2[0]
            var newY = newCell2[1]
            matrix[newY][newX] = 2

            matrix[super.y][super.x] = 2;

            super.x = newX
            super.y = newY

            super.energy--
        }
        if (super.energy < super.dieEnergy) {
            this.die()
        }


    }

    die() {
        for (var i in grassEatArr) {
            if (super.x == grassEatArr[i].x && super.y == grassEatArr[i].y) {
                grassEatArr.splice(i, 1)
                break;
            }

        }
        matrix[super.y][super.x] = 0
    }




    mulGEat() {

        const newCell = random(super.chooseCell(0));
        if (newCell && super.energy >= super.mulEnergy) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 2
            grassEatArr.push(new GrassEater(newX, newY, super.energy, super.mulEnergy))
            super.energy = super.defEnergy


        }
    }
}