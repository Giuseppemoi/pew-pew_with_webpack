import {ctxDom} from "./_canvas";
import {allImg} from "./_allImg";

export function drawHeart() {
    ctxDom.drawImage(allImg.heart, 100, 100)
}

export function drawTriple() {
    ctxDom.drawImage(allImg.triple, 200, 200)
}

export function drawShield() {
    ctxDom.drawImage(allImg.shield, 300, 300)
}

export function drawCleaner() {
    ctxDom.drawImage(allImg.cleaner, 400, 400)
}