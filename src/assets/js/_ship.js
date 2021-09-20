import {canvasDom, ctxDom} from "./_canvas";
import {allImg} from "./_img";

let shipHeight = allImg.ship.height || 56;
export let ship = {ship1: {x: canvasDom.width/2, y: canvasDom.height - shipHeight}}

export function getXShip() {
    if (event.target.id === "game") {
        ship.ship1.x = event.clientX-30
    }
}

export function drawShip() {
    ctxDom.drawImage(allImg.ship, ship.ship1.x, ship.ship1.y)
}