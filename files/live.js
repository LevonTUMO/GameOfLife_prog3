module.exports = class LivingCreature {

    constructor(x, y, index) {

        this.x = x;
        this.y = y;
        this.index = index;
        this.multiplay = 0;
        this.dieEnergy = 0;
    

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        this.getNewCords()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x>= 0&& x < matrix[0].length && y>= 0 && y < matrix.length) {
            
            
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }

        return found;
     
     }

     getNewCords() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    die(arr) {
        for (var i in arr) {
            if (this.x == arr[i].x && this.y == arr[i].y) {
                arr.splice(i, 1)
                break;
            }

        }
        matrix[this.y][this.x] = 0
    }

}