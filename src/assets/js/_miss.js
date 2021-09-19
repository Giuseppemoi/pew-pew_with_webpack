import {allRandomPosition, randomXY} from "./_bonuses";
import {canvasDom} from "./_canvas";
import {allImg} from "./_img";

export function missed(randomPosition, img) {
    if(randomPosition.y > canvasDom.height) {
        randomPosition = randomXY(img)
        //console.log(randomPosition)
    }
}

// export function missed() {
//     if(allRandomPosition.heart.y > canvasDom.height) {
//         allRandomPosition.heart = randomXY(allImg.heart)
//     }
// }