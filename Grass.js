class Grass extends LivingCreature {
    constructor(x, y, index) {
        super();
        super.x = x;
        super.y = y;
        super.index = index;
    }

    mul() {
        const newCell = random(super.chooseCell(0));
        if (super.multiplay >= 60 && newCell) {
            const newGrass = new Grass(newCell[0], newCell[1], 1)
            grassArr.push(newGrass)
            matrix[newCell[1]][newCell[0]] = 1
            super.multiplay = 0;
        }
        super.multiplay++
    }

    die() {
        for (var i in grassArr) {
            if (super.x == grassArr[i].x && super.y == grassArr[i].y) {
                grassArr.splice(i, 1)
                break;
            }

        }
        matrix[super.y][super.x] = 0
    }

}

