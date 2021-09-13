import shield from "../images/shield.png";
import triple from "../images/triple.png";
import cleaner from "../images/cleaner.png";
import heart from "../images/heart.png";

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
        imgTag.src = heart;
    })
}

