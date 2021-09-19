import {canvasDom, ctxDom} from "./_canvas";
import {allImg} from "./_img";

export let allTargets = {}
let numberOfTarget = 10
let targetStartingPoint = -1000
let targetSpeedMultiplier = 1.5

for (let i = 0; i < numberOfTarget; i++) {
    allTargets['target-' + i] = {x: Math.floor(Math.random() * (canvasDom.width - allImg.target.width)), y: Math.floor(Math.random() * targetStartingPoint) - allImg.target.height}
}

export function drawTargets() {
    for (let targetPosition in allTargets) {
        let targetNumber = targetPosition.split('target-')[1]
        ctxDom.drawImage(allImg.target, allTargets[targetPosition].x, allTargets[targetPosition].y)
        allTargets[targetPosition].y  += 1 + (`0.${targetNumber}` * targetSpeedMultiplier);
    }
}