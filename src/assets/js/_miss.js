import {allBonusesRandomPosition, randomXY} from "./_bonuses";
import {canvasDom} from "./_canvas";
import {allImg} from "./_img";
import {allTargets} from "./_target";
import {arrayProjectile} from "./_projectile";

export function checkMissedBonus() {
    for (let bonusPosition in allBonusesRandomPosition) {
        if(allBonusesRandomPosition[bonusPosition].y > canvasDom.height) {
            allBonusesRandomPosition[bonusPosition] = randomXY(allImg[bonusPosition])
        }
    }
}

export function checkMissedTarget() {
    for (let TargetPosition in allTargets) {
        if(allTargets[TargetPosition].y > canvasDom.height) {
            allTargets[TargetPosition] = randomXY(allImg.target)
        }
    }
}

export function checkMissedProjectile() {
    arrayProjectile.forEach(projectile => {
        if (projectile[1] < 0) {
            arrayProjectile.splice(projectile, 1);
        }
    })
}