var fs = require('fs');
module.exports = class LivingCreature {

    constructor(x, y, index) {

        this.x = x;
        this.y = y;
        this.index = index;
        
        this.dieEnergy = 0;

        if(Math.floor(Math.random() * 100) % 2 ==0){
            this.ser="m"
        }else{
            this.ser="f"
        }

        this.mulTime = 0;

        this.liveMulTime = 0;

        
    

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
    
    random(emptyCells) {
        return emptyCells[Math.floor(Math.random() * emptyCells.length)]
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
                delete arr[i];
                arr.splice(i, 1)
                
                break;
            }

        }
        matrix[this.y][this.x] = 0
        // console.log("die")
    }



    addStatistics(who,howmany=1){
        var json = null;
        json = fs.readFileSync("statistics.json")
        var jsonArr = JSON.parse(json)
        jsonArr[who] = jsonArr[who]+howmany
        jsonArr["all"] = jsonArr["all"]+howmany
        var JsonString = JSON.stringify(jsonArr, null, 4);

        fs.writeFileSync("statistics.json", JsonString);
    }

}