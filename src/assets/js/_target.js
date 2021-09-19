import {canvasDom, ctxDom} from "./_canvas";
import {allImg} from "./_img";

export let arrayTarget = [];
let numberOfTarget = 10
let targetSpeedMultiplier = 1.5
let targetStartingPoint = 1000

for (let i = 0; i < numberOfTarget; i++) {
    arrayTarget.push({x: Math.floor(Math.random() * (canvasDom.width - allImg.target.width)), y: Math.floor(Math.random() * - targetStartingPoint) - allImg.target.height});
}

export function drawTarget() {
    for (let i = 0; i < arrayTarget.length; i++) {
        ctxDom.drawImage(allImg.target, arrayTarget[i].x, arrayTarget[i].y)
        arrayTarget[i].y += 1 + (`0.${i}` * targetSpeedMultiplier);
    }
}