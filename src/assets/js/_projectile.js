import {play} from "./_draw";
import {ship} from "./_ship";
import {ctxDom} from "./_canvas";
import {allImg} from "./_img";

export let allProjectiles = {};
let projectileSpeed = 10;

export function savePositionProjectile() {
    if (event.button === 0) {
        if (play) {
            if (event.target.id === "game") {
                let date = new Date();
                allProjectiles[date.getTime()] = {x: ship.ship1.x, y: ship.ship1.y}
            }
        }
    }
}

export function drawProjectiles() {
    for (let projectile in allProjectiles) {
        ctxDom.drawImage(allImg.projectile, allProjectiles[projectile].x + (allImg.ship.width / 2) - (allImg.projectile.width / 2), allProjectiles[projectile].y)
        allProjectiles[projectile].y -= projectileSpeed
    }
}