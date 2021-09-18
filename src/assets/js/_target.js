import {canvasDom, ctxDom} from "./_canvas";
import {allImg} from "./_allImg";

export let arrayTarget = [];
let numberOfTarget = 10

for (let i = 0; i < numberOfTarget; i++) {
    arrayTarget.push({x: Math.floor(Math.random() * (canvasDom.width - allImg.target.width)), y: Math.floor(Math.random() * -1000) - allImg.target.height});
}

export function drawTarget() {
    for (let i = 0; i < arrayTarget.length; i++) {
        ctxDom.drawImage(allImg.target, arrayTarget[i].x, arrayTarget[i].y)
        arrayTarget[i].y += 1 + (`0.${i}` * 1.5);
    }
}