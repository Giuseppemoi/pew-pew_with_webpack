import {allBonuses, bonusesStartingPoint, drawShipShield} from "./_bonuses";
import {allImg} from "./_img";
import {allTargets, targetStartingPoint} from "./_target";
import {allProjectiles} from "./_projectile";
import {allShip} from "./_ship";
import {generatePosition} from "./_canvas";

let score = 0

export function checkCollide(rect1, rect2, img1, img2) {
    if (rect1.x < rect2.x + img2.width &&
        rect1.x + img1.width > rect2.x &&
        rect1.y < rect2.y + img2.height &&
        img1.height + rect1.y > rect2.y) {
        return true
    }
}

export function collideBonusTripleShip() {
    if (checkCollide(allBonuses["triple"], allShip.ship1, allImg.triple, allImg.ship)){
        allBonuses["triple"] = generatePosition(allImg.triple, bonusesStartingPoint);
    }
}

export function collideBonusShieldShip() {
    // if (checkCollide(allBonuses["shield"], allShip.ship1, allImg.shield, allImg.ship)){
    //     allBonuses["shield"] = generatePosition(allImg.shield, bonusesStartingPoint);
    //     // console.log(typeof colShield)
        drawShipShield()
    // }
}

export function collideBonusCleanerShip() {
    if (checkCollide(allBonuses["cleaner"], allShip.ship1, allImg.cleaner, allImg.ship)){
        allBonuses["cleaner"] = generatePosition(allImg.cleaner, bonusesStartingPoint);
    }
}

export function collideBonusHeartShip() {
    if (checkCollide(allBonuses["heart"], allShip.ship1, allImg.heart, allImg.ship)){
        allBonuses["heart"] = generatePosition(allImg.heart, bonusesStartingPoint);
    }
}

export function collideTargetProjectile(){
    for (let target in allTargets) {
        for (let projectile in allProjectiles) {
            if (checkCollide(allTargets[target], allProjectiles[projectile], allImg.projectile, allImg.target)){
                allTargets[target] = generatePosition(allImg.target, targetStartingPoint)
                delete allProjectiles[projectile];
                score++
                let scoreSpan = document.getElementById('score')
                scoreSpan.innerHTML = score.toString()
            }
        }
    }
}

export function collideTargetShip(){
    for (let target in allTargets) {
        for (let ship in allShip) {
            if (checkCollide(allTargets[target], allShip[ship], allImg.target, allImg.ship)){
                allTargets[target] = generatePosition(allImg.target, targetStartingPoint)
            }
        }
    }
}