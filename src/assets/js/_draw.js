import {clearCanvas} from "./_canvas";
import {drawShip, ship} from "./_ship";
import {allTargets, drawTargets} from "./_target";
import {allProjectiles, drawProjectiles} from "./_projectile";
import {allBonuses, drawBonuses} from "./_bonuses";
import {checkMissedBonus, checkMissedProjectile, checkMissedTarget} from "./_miss";
import {collide} from "./_collision";
import {allImg} from "./_img";

export let play = true;
let myAnimation

export function startGame() {
    if (play) {
        clearCanvas()
        drawProjectiles()
        drawShip()
        drawTargets()
        drawBonuses()
        checkMissedBonus()
        checkMissedTarget()
        checkMissedProjectile()
        collide(allTargets, allProjectiles, allImg.target, allImg.projectile)
        collide(allBonuses, ship, allImg.triple, allImg.ship)
        collide(allTargets, ship, allImg.target, allImg.ship)
        myAnimation = requestAnimationFrame(startGame);
    } else {
        cancelAnimationFrame(myAnimation);
    }
}