export let canvasDom = document.getElementById("game");
canvasDom.width = window.innerWidth;
canvasDom.height = window.innerHeight / 1.5;

export let ctxDom = canvasDom.getContext("2d");
ctxDom.lineWidth = "5";
