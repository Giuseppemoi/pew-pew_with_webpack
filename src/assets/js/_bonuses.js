import {ctxDom, generatePosition} from "./_canvas";
import {allImg} from "./_img";
import {allShip} from "./_ship";
import {checkCollide} from "./_collisions";

export let bonusesStartingPoint = -36
export let colShield = false

let shieldTime = 0;
let shieldDocElem = document.getElementById("shieldTime")

function timer(bonus) {
    let inter
    if (bonus > 0) {
        inter = setInterval(bonus++, 1000)
    }
    if (bonus === 0) {
        clearInterval(inter)
    }
}

export let allBonuses = {
    heart: generatePosition(allImg.heart, bonusesStartingPoint),
    triple: generatePosition(allImg.triple, bonusesStartingPoint),
    shield: generatePosition(allImg.shield, bonusesStartingPoint),
    cleaner: generatePosition(allImg.cleaner, bonusesStartingPoint)
}

export function drawBonuses() {
    for (let bonusPosition in allBonuses) {
        ctxDom.drawImage(allImg[bonusPosition], allBonuses[bonusPosition].x, allBonuses[bonusPosition].y)
        allBonuses[bonusPosition].y++
    }
}

// Shield Bonus

// function shieldTimer() {
//     if (shieldTime > 0) {
//         shieldTime--
//     }
//     if (shieldTime < 1000){
//         shieldDocElem = "00" + " : " + "0" + Math.floor(shieldTime/100);
//     } else {
//         shieldDocElem = "00" + " : " + Math.floor(shieldTime/100);
//     }
//     if (shieldTime === 0) {
//         colShield = false;
//         shieldDocElem = "00 : 00";
//     }
// };

export function drawShipShield() {
    if (checkCollide(allBonuses["shield"], allShip.ship1, allImg.shield, allImg.ship)){
        allBonuses["shield"] = generatePosition(allImg.shield, bonusesStartingPoint);
        colShield = true
        shieldTime += 30;
    }
    if (colShield) {
        ctxDom.drawImage(allImg.shipShield, allShip.ship1.x - 11, allShip.ship1.y - 11, allImg.shipShield.width, allImg.shipShield.height);
    }
    if (shieldTime > 0) {
        shieldTime -= (30 / 18000)
    }
    if (shieldTime < 1000){
        shieldDocElem.innerHTML = "00" + " : " + "0" + Math.floor(shieldTime);
    } else {
        shieldDocElem.innerHTML = "00" + " : " + Math.floor(shieldTime);
    }
    if (shieldTime === 0) {
        colShield = false;
        shieldDocElem.innerHTML = "00 : 00";
    }
}
