import {canvasDom, ctxDom} from "./_canvas";
import {allImg} from "./_img";

let shipHeight = allImg.ship.height || 56;
export let allShip = {ship1: {x: canvasDom.width/2, y: canvasDom.height - shipHeight}}

export function getXShip() {
    if (event.target.id === "game") {
        allShip.ship1.x = event.clientX-30
    }
}

export function drawShip() {
    ctxDom.drawImage(allImg.ship, allShip.ship1.x, allShip.ship1.y)
}