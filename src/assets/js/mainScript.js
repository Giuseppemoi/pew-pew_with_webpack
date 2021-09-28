import "../style/style.scss";
import {generateBonusesHeart, generateBonusesImage} from "./_img";
import {getXShip} from "./_ship.js";
import {startGame} from "./_draw.js";
import {savePositionProjectile} from "./_projectile";

// Generate img tag in the dom
generateBonusesImage();
generateBonusesHeart();

// Event listener to move the ship based on the mouse move
document.addEventListener('mousemove', getXShip);

// Event listener to get ship position and set projectile
document.addEventListener("mousedown", savePositionProjectile)

// Ship shield bonus timer


// Animate the game
requestAnimationFrame(startGame)
