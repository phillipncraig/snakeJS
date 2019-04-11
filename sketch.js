let snake;
let resolution = 10; //Resolution scales up the food and snake. Increase for a bigger snake
let speed = 15; //Speed is the pace of the game. Beginner = 5, Intermediate = 10, Advanced = 15;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / resolution);
  h = floor(height / resolution);
  frameRate(speed);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

// keyPressed function controlls user inputs from the keyboard. Note the spacebar grow the snake (for testing purposes)
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (key === ' ') {
    snake.grow();
  }
}


function draw() {
  scale(resolution)
  background(206, 225, 255); // Colour of background
  if (snake.eat(food)) {
    foodLocation();
  }

  snake.update();
  snake.show();

  if (snake.endGame()) {
    console.log("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  snake.eat(food);
  noStroke();
  fill(255, 0, 0); // Colour of food
  rect(food.x, food.y, 1, 1, 2)

}