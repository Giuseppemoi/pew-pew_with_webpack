import shield from "../images/shield.png";
import triple from "../images/triple.png";
import cleaner from "../images/cleaner.png";
import shipImg from "../images/ship.png";
import targetImg from "../images/target.png";
import heartImg from "../images/heart.png";
import tripleImg from "../images/tripleBiger.png";
import shieldImg from "../images/shieldBiger.png";
import cleanerImg from "../images/cleanerBiger.png";

export let allImg = {
    ship: newImg(shipImg),
    target: newImg(targetImg),
    heart: newImg(heartImg),
    triple: newImg(tripleImg),
    shield: newImg(shieldImg),
    cleaner: newImg(cleanerImg)
}

export function generateBonusesImage() {
    let shieldPng = document.getElementById("shield-png");
    shieldPng.src = shield;

    let triplePng = document.getElementById("triple-png");
    triplePng.src = triple;

    let cleanerPng = document.getElementById("cleaner-png");
    cleanerPng.src = cleaner;
}

export function generateBonusesHeart() {
    let liveFlex = document.getElementById("life").querySelectorAll("img");
    liveFlex.forEach( imgTag => {
        imgTag.src = heartImg;
    })
}

function newImg(srcImg) {
    let img = new Image();
    img.src = srcImg;
    return  img
}
