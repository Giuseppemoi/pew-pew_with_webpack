import {canvasDom} from "./_canvas";
import {allImg} from "./_allImg";

export let arrayTarget = [];
let numberOfTarget = 10

for (let i = 0; i < numberOfTarget; i++) {
    arrayTarget.push({x: Math.floor(Math.random() * (canvasDom.width - allImg.target.width / 2)), y: Math.floor(Math.random() * -1000) - allImg.target.height});
}
