import {canvasDom, ctxDom} from "./_canvas";
import {allImg} from "./_img";

let bonusesStartingPoint = -100
let bonusPosition

export let allRandomPosition = {
    heart: randomXY(allImg.heart),
    triple: randomXY(allImg.triple),
    shield: randomXY(allImg.shield),
    cleaner: randomXY(allImg.cleaner)
}

export function randomXY(bonusImg) {
    return bonusPosition = {
        x: Math.floor(Math.random() * (canvasDom.width - bonusImg.width)),
        y: Math.floor(Math.random() * bonusesStartingPoint) - bonusImg.height
    }
}

export function drawBonus(bonusImg, randomPosition) {
    ctxDom.drawImage(bonusImg, randomPosition.x, randomPosition.y)
    randomPosition.y++
}