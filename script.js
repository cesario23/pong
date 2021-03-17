// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);

const computerBall = document.querySelector (".ball");

let computerBallXPosition = 0;
let computerBallXVelocity = 2;
let computerBallYPosition = 0;
let computerBallYVelocity = 1;

function ballPositionYDirection(){
    if (computerBallYPosition + computerBallYVelocity >= GAME_AREA_HEIGHT){
          computerBallYVelocity = computerBallYVelocity * -1;
    }
    computerBallYPosition = computerBallYPosition + computerBallYVelocity;
    computerBall.style.top = `${computerBallYPosition}px`;
    
}

function loop2 (){
    ballPositionYDirection();
    window.webkitRequestAnimationFrame (loop2);
}
window.webkitRequestAnimationFrame (loop2);

function ballPositionXDirection (){
    if (computerBallXPosition + computerBallXVelocity >= GAME_AREA_WIDTH){
        computerBallXVelocity = computerBallXVelocity *-1;
    }
    computerBallXPosition = computerBallXPosition + computerBallXVelocity ;
    computerBall.style.left = `${computerBallXPosition}px`;
}

function loop3 (){
    ballPositionXDirection ();
    window.webkitRequestAnimationFrame (loop3);
}
window.webkitRequestAnimationFrame (loop3);