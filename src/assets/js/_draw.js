import {clearCanvas} from "./_canvas";
import {drawShip} from "./_ship";
import {drawTarget} from "./_target";
import {drawProjectile} from "./_projectile";
import {drawBonus, allRandomPosition} from "./_bonuses";
import {allImg} from "./_img";
import {missed} from "./_miss";

export let play = true;
let myAnimation

export function startGame() {
    if (play) {
        clearCanvas()
        drawProjectile()
        drawShip()
        drawTarget()
        drawBonus(allImg.heart, allRandomPosition.heart)
        drawBonus(allImg.triple, allRandomPosition.triple)
        drawBonus(allImg.shield, allRandomPosition.shield)
        drawBonus(allImg.cleaner, allRandomPosition.cleaner)
        missed(allRandomPosition.heart, allImg.heart)
        myAnimation = requestAnimationFrame(startGame);
    } else {
        cancelAnimationFrame(myAnimation);
    }
}