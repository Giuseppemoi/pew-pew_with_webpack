import "../style/style.scss";
import {generateBonusesHeart, generateBonusesImage} from "./_img";
import {getXShip} from "./_ship.js";
import {startGame} from "./_draw.js";
import {saveCoordProjectile} from "./_projectile";

// Generate img tag in the dom
generateBonusesImage();
generateBonusesHeart();

// Event listener to move the ship based on the mouse move
document.addEventListener('mousemove', getXShip);

// Animate the game
requestAnimationFrame(startGame)

document.addEventListener("mousedown", saveCoordProjectile)