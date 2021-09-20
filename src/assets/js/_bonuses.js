import {ctxDom} from "./_canvas";
import {allImg} from "./_img";
import {generateTargetPosition} from "./_generatePosition";

export let bonusesStartingPoint = -36000

export let allBonuses = {
    heart: generateTargetPosition(allImg.heart, bonusesStartingPoint),
    triple: generateTargetPosition(allImg.triple, bonusesStartingPoint),
    shield: generateTargetPosition(allImg.shield, bonusesStartingPoint),
    cleaner: generateTargetPosition(allImg.cleaner, bonusesStartingPoint)
}

export function drawBonuses() {
    for (let bonusPosition in allBonuses) {
        ctxDom.drawImage(allImg[bonusPosition], allBonuses[bonusPosition].x, allBonuses[bonusPosition].y)
        allBonuses[bonusPosition].y++
    }
}