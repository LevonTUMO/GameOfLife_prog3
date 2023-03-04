var LivingCreature = require("./live")
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.multiplay = 0;
        super.addStatistics("Grass")
        this.mulTime = 10;
    }

    mul() {
        const newCell = super.random(super.chooseCell(0));
        if (this.multiplay >= this.mulTime && newCell) {
            const newGrass = new Grass(newCell[0], newCell[1], 1)
            grassArr.push(newGrass)
            matrix[newCell[1]][newCell[0]] = 1
            this.multiplay = 0;
        }
        this.multiplay++
        
    }

}

