const Grid = require('./grid');

console.dir(new Grid(36));


class Game{
    constructor(gridsize){
        this.grid= new this.grid(gridSize,true);
    }
    play(){
        return this.grid.compute().render();
    }
}

module.exports=Game;