class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        
    }

    mul() {
        const newCell = random(super.chooseCell(0));
        if (this.multiplay >= 60 && newCell) {
            const newGrass = new Grass(newCell[0], newCell[1], 1)
            grassArr.push(newGrass)
            matrix[newCell[1]][newCell[0]] = 1
            this.multiplay = 0;
        }
        this.multiplay++
        
    }

}

