export let canvasDom = document.getElementById("game");
canvasDom.width = window.innerWidth;
canvasDom.height = window.innerHeight / 1.5;

export let ctxDom = canvasDom.getContext("2d");
ctxDom.lineWidth = "5";

export function clearCanvas() {
    ctxDom.clearRect(0, 0, canvasDom.width, canvasDom.height)
}

export function generatePosition(img, startingPoint) {
    return {
        x: Math.floor(Math.random() * (canvasDom.width - img.width)),
        y: Math.floor(Math.random() * startingPoint) - img.height}
}
