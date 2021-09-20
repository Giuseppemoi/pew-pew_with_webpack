import {allBonuses, randomXY} from "./_bonuses";
import {canvasDom} from "./_canvas";
import {allImg} from "./_img";
import {allTargets} from "./_target";
import {allProjectiles} from "./_projectile";

export function checkMissedBonus() {
    for (let bonusPosition in allBonuses) {
        if(allBonuses[bonusPosition].y > canvasDom.height) {
            allBonuses[bonusPosition] = randomXY(allImg[bonusPosition])
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
    for (let projectilesPosition in allProjectiles) {
        if (allProjectiles[projectilesPosition].y < 0) {
            delete allProjectiles[projectilesPosition]
        }
    }
}
