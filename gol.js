//

const readline = require ('readline');// модуль node.js для взаимодейтсвия с команб строкой
const Game = require('.//game');
const [,, size=36, speed=1000 ]= process.argv; // размер сетки и скорость обновления

const game= new Game(size);
//запускаем игру

setInterval( () => {

    let output=game.play();

    readline.cursorTo(process.stdout,0,0);
    readline.clearScreenDown(process.stdout);

    process.stdout.write(output);
}, speed);