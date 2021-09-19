import {clearCanvas} from "./_canvas";
import {drawShip} from "./_ship";
import {drawTargets} from "./_target";
import {drawProjectile} from "./_projectile";
import {drawBonuses} from "./_bonuses";
import {checkMissedBonus, checkMissedProjectile, checkMissedTarget} from "./_miss";

export let play = true;
let myAnimation

export function startGame() {
    if (play) {
        clearCanvas()
        drawProjectile()
        drawShip()
        drawTargets()
        drawBonuses()
        checkMissedBonus()
        checkMissedTarget()
        checkMissedProjectile()
        myAnimation = requestAnimationFrame(startGame);
    } else {
        cancelAnimationFrame(myAnimation);
    }
}