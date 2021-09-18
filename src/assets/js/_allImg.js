import shipImg from "../images/ship.png";
import targetImg from "../images/target.png";
import heartImg from "../images/heart.png";
import tripleImg from "../images/tripleBiger.png";
import shieldImg from "../images/shieldBiger.png";
import cleanerImg from "../images/cleanerBiger.png";

function newImg(srcImg) {
    let img = new Image();
    img.src = srcImg;
    return  img
}

export let allImg = {
    ship: newImg(shipImg),
    target: newImg(targetImg),
    heart: newImg(heartImg),
    triple: newImg(tripleImg),
    shield: newImg(shieldImg),
    cleaner: newImg(cleanerImg)
}
