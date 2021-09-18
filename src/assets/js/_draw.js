import {canvasDom, ctxDom} from "./_canvas";
import {xShip, yShip} from "./_ship";
import {allImg} from "./_allImg"
import {arrayTarget} from "./_target";

let play = true;
let myAnimation

export function startGame() {
        if (play) {
                // Clear canvas
                ctxDom.clearRect(0, 0, canvasDom.width, canvasDom.height)
                // Draw Ship
                ctxDom.drawImage(allImg.ship, xShip, yShip)
                // Draw Target
                arrayTarget.forEach(alien  => {
                        ctxDom.drawImage(allImg.target, alien.x, alien.y)
                        alien.y++
                })
                myAnimation = requestAnimationFrame(startGame);
        } else {
                cancelAnimationFrame(myAnimation);
        }
}