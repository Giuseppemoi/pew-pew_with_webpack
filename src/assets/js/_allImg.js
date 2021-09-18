import shipImg from "../images/ship.png";
import targetImg from "../images/target.png";

function newImg(srcImg) {
    let img = new Image();
    img.src = srcImg;
    return  img
}

export let allImg = {
    ship: newImg(shipImg),
    target: newImg(targetImg)
}
