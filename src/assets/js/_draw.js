import {clearCanvas} from "./_canvas";
import {drawShip} from "./_ship";
import {drawTarget} from "./_target";
import {drawProjectile} from "./_projectile";
import {drawCleaner, drawHeart, drawShield, drawTriple} from "./_bonuses";

export let play = true;
let myAnimation

export function startGame() {
    if (play) {
        clearCanvas()
        drawProjectile()
        drawShip()
        drawTarget()
        drawHeart()
        drawTriple()
        drawShield()
        drawCleaner()
        myAnimation = requestAnimationFrame(startGame);
    } else {
        cancelAnimationFrame(myAnimation);
    }
}