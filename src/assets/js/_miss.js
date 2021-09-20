import {allBonuses, bonusesStartingPoint} from "./_bonuses";
import {canvasDom} from "./_canvas";
import {allImg} from "./_img";
import {allTargets, generateTargetPosition, targetStartingPoint} from "./_target";
import {allProjectiles} from "./_projectile";

export function checkMissedBonus() {
    for (let bonusPositionKey in allBonuses) {
        if(allBonuses[bonusPositionKey].y > canvasDom.height) {
            allBonuses[bonusPositionKey] = generateTargetPosition(allImg[bonusPositionKey], bonusesStartingPoint)
        }
    }
}

export function checkMissedTarget() {
    for (let TargetPositionKey in allTargets) {
        if(allTargets[TargetPositionKey].y > canvasDom.height) {
            allTargets[TargetPositionKey] = generateTargetPosition(allImg.target, targetStartingPoint)
        }
    }
}

export function checkMissedProjectile() {
    for (let projectilesPositionKey in allProjectiles) {
        if (allProjectiles[projectilesPositionKey].y < 0) {
            delete allProjectiles[projectilesPositionKey]
        }
    }
}
