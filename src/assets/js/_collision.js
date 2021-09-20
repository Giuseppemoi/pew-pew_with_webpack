import {randomXY} from "./_bonuses";
import {allImg} from "./_img";

export function collide(rect1, rect2, img1, img2) {
    for (let rect1Key in rect1) {
        for (let rect2Key in rect2) {
            if (rect1[rect1Key] !== undefined) {
                if (rect1[rect1Key].x < rect2[rect2Key].x + img1.width + img2.width &&
                    rect1[rect1Key].x + img1.width + img2.width > rect2[rect2Key].x + img1.width &&
                    rect1[rect1Key].y < rect2[rect2Key].y + img2.height &&
                    rect1[rect1Key].y + img1.height > rect2[rect2Key].y){
                    rect1[rect1Key] = randomXY(img1);
                    if (img2 !== allImg.ship) {
                        delete rect2[rect2Key];
                    }
                }
            }
        }
    }
}