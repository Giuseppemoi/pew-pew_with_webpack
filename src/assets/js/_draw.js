import {clearCanvas} from "./_canvas";
import {drawShip} from "./_ship";
import {drawTargets} from "./_target";
import {drawProjectiles} from "./_projectile";
import {drawBonuses, drawShipShield} from "./_bonuses";
import {checkMissedBonus, checkMissedProjectile, checkMissedTarget} from "./_miss";
import {collideBonusCleanerShip, collideBonusHeartShip, collideBonusShieldShip, collideBonusTripleShip, collideTargetProjectile, collideTargetShip } from "./_collisions";

export let play = true;
let myAnimation
let a = 0
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
        collideTargetProjectile()
        collideTargetShip()
        collideBonusTripleShip()
        collideBonusShieldShip()
        collideBonusCleanerShip()
        collideBonusHeartShip()
        drawShipShield()
        myAnimation = requestAnimationFrame(startGame, );
    } else {
        cancelAnimationFrame(myAnimation);
    }
}