var LivingCreature = require("./live");
module.exports = class GrassEaterEater extends LivingCreature {
  constructor(x, y) {
    super(x, y, 1);
    this.energy = 160;
    this.mulEnergy = 140;
    this.defEnergy = 150;
    this.mulTime = 20;
    super.addStatistics("GrassEaterEater")
  }

  eat() {
    // console.log(this)
    const newCell = super.random(this.chooseCell(2));
    this.liveMulTime++;
    // const newCell1 = super.random(this.chooseCell(1));
    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      

      for (var i in grassEatArr) {
        if (newX == grassEatArr[i].x && newY == grassEatArr[i].y) {
          grassEatArr[i].die(grassEatArr);
          matrix[newY][newX] = 4;

          matrix[this.y][this.x] = 0;

          this.x = newX;
          this.y = newY;

          this.energy++;
          break;
        }
      }
      if (this.energy >= this.mulEnergy) {
        this.mulGEat();
      }
    } /*else if (newCell1){
            var newX = newCell1[0]
var newY = newCell1[1]
matrix[newY][newX] = 4

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

// this.energy = this.energy + 0.05
        
for(var i in grassEatEatArr){
    if(newX == grassArr[i].x && newY == grassArr[i].y){
grassArr.splice(i,1)
break;
    }
}
if(this.energy >= this.mulEnergy){
    this.mulGEat();
}
        }*/ else {
      this.move();
    }
  }

  move() {
    const newCell = super.random(this.chooseCell(0));
    const newCell2 = super.random(this.chooseCell(1));

    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 4;

      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;

      this.energy--;
    } else if (newCell2) {
      var newX = newCell2[0];
      var newY = newCell2[1];

      for(var i in grassArr){
        if(grassArr[i].x == newX && grassArr[i].y == newY){
          grassArr[i].die(grassArr)
          matrix[newY][newX] = 4;

          matrix[this.y][this.x] = 0;
    
          this.x = newX;
          this.y = newY;

          this.energy = this.energy - 0.25;
          break
        }
      }
  

      
    } 
    if (this.energy < this.dieEnergy) {
      this.die(grassEatEatArr);
    }
    if(this.energy>= this.mulEnergy){
      this.mulGEat()
    }
  }

  mulGEat() {
    if(this.ser == 'm'){
      return;
  }
    var newCell = null;
    var newCell1 = null;

    const newEnt = super.random(this.chooseCell(4));

    if (
      newEnt &&
      this.energy >= this.mulEnergy &&
      this.mulTime <= this.liveMulTime
    ) {

      for (var i in grassEatEatArr) {
        if (
          grassEatEatArr[i].x == newEnt[0] &&
          grassEatEatArr[i].y == newEnt[1]
        ) {
          if (
            grassEatEatArr[i].ser != this.ser &&
            grassEatEatArr[i].energy >= grassEatEatArr[i].mulEnergy &&
            grassEatEatArr[i].mulTime <= grassEatEatArr[i].liveMulTime
          ) {
            newCell = super.random(this.chooseCell(0));
            newCell1 = super.random(this.chooseCell(1));
          }
          break;
        }
      }
    }

    if (newCell != null) {
      // console.log("spawned")
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 4;
      grassEatEatArr.push(
        new GrassEaterEater(newX, newY, this.energy, this.mulEnergy)
      );
      this.energy = this.defEnergy;
      this.liveMulTime = this.mulTime;
      grassEatEatArr[i].liveMulTime = grassEatEatArr[i].mulTime
      grassEatEatArr[i].energy = grassEatEatArr[i].defEnergy;
      
    } else if (newCell1 != null) {
      // console.log("spawned")
      var newX = newCell1[0];
      var newY = newCell1[1];
      matrix[newY][newX] = 4;
      grassEatEatArr.push(
        new GrassEaterEater(newX, newY, this.energy, this.mulEnergy)
      );
      this.energy = this.defEnergy;
      this.liveMulTime = this.mulTime;
      grassEatEatArr[i].liveMulTime == grassEatEatArr[i].mulTime
      grassEatEatArr[i].energy = grassEatEatArr[i].defEnergy;
      // console.log("spawned")
      
    }
  }
};
