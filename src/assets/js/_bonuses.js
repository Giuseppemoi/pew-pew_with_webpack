import {canvasDom, ctxDom} from "./_canvas";
import {allImg} from "./_img";

let bonusesStartingPoint = -100

export let allBonusesRandomPosition = {
    heart: randomXY(allImg.heart),
    triple: randomXY(allImg.triple),
    shield: randomXY(allImg.shield),
    cleaner: randomXY(allImg.cleaner)
}

export function randomXY(img) {
    return {
        x: Math.floor(Math.random() * (canvasDom.width - img.width)),
        y: Math.floor(Math.random() * bonusesStartingPoint) - img.height
    }
}

export function drawBonuses() {
    for (let bonusPosition in allBonusesRandomPosition) {
        ctxDom.drawImage(allImg[bonusPosition], allBonusesRandomPosition[bonusPosition].x, allBonusesRandomPosition[bonusPosition].y)
        allBonusesRandomPosition[bonusPosition].y++
    }
}