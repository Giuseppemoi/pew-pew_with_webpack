import {canvasDom} from "./_canvas";

export function generateTargetPosition(img, startingPoint) {
    return {
        x: Math.floor(Math.random() * (canvasDom.width - img.width)),
        y: Math.floor(Math.random() * startingPoint) - img.height}
}
