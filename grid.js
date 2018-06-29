const Cell=require('./grid');

class Grid{
    constructor(size,ramdomize=false){
        this.size=size;

        this.init(ramdomize);
    }
    init(ramdomize){
        this.cells= new Array(this.size);

        for (let r=0; r < this.size; r++){
            this.cells[r]=new Array(this.size);

            for (let c=0; c < this.size; c++){
                if(ramdomize){
                    let isAlive=Math.random() < .5;

                    this.cells[r][c]=new Cell (r, c, isAlive);
                } else{
                    this.cells[r][c]=new Cell (r,c);
                }
                }
            }
        }

    }


module.exports=Grid;