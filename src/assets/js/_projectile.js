import {play} from "./_draw";
import {xShip, yShip} from "./_ship";
import {ctxDom} from "./_canvas";
import {allImg} from "./_img";

export let arrayProjectile = [];
let projectileSpeed = 10;
let projectileWidth = 5
let projectileHeight = 20

export function savePositionProjectile() {
    if (event.button === 0) {
        if (play) {
            if (event.target.id === "game") {
                arrayProjectile.push([xShip, yShip]);
            }
        }
    }
}

export function drawProjectile() {
    if (arrayProjectile.length > 0) {
        arrayProjectile.forEach(projectile => {
            ctxDom.beginPath();
            ctxDom.rect(projectile[0] + (allImg.ship.width / 2) - (projectileWidth / 2), projectile[1], projectileWidth, projectileHeight);
            ctxDom.fillStyle = "#82fe23";
            ctxDom.fill();
            ctxDom.closePath();
            projectile[1] = projectile[1] - projectileSpeed;
        })
    }
}
