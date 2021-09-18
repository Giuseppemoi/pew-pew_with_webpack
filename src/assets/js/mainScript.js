import "../style/style.scss";
import {generateBonusesHeart, generateBonusesImage} from "./_img";
import {getXShip} from "./_ship.js";
import {startGame} from "./_draw.js";

// Generate img tag in the dom
generateBonusesImage();
generateBonusesHeart();

// Event listener to move the ship
document.addEventListener('mousemove', getXShip);

// Animate the game
requestAnimationFrame(startGame)

