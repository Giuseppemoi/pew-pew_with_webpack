import {canvasDom} from "./_canvas";
import {allImg} from "./_allImg";

export let xShip = canvasDom.width/2;
let shipHeight = allImg.ship.height || 56;
export let yShip = canvasDom.height - shipHeight;

export function getXShip() {
    if (event.target.id === "game") {
        xShip = event.clientX-30
    }
}

