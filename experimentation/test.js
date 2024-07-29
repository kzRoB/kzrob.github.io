// values
var flipped = false;
var score = -1; //-1 due to bg adding 1 
var game = true;

//plr
var plr = createSprite(0,200);
plr.setAnimation("player");
plr.scale = 0.05;
plr.rotation = 135;
plr.velocityX = 4.9;

//plr2
var plr2 = createSprite(0,200);
plr2.setAnimation("player");
plr2.scale = 0.05;
plr2.rotation = 45;
plr2.velocityX = 4.9;

//spikes
var spike1 = createSprite();
spike1.setAnimation("spike");
var spike2 = createSprite();
spike2.setAnimation("spike");
var spike3 = createSprite();
spike3.setAnimation("spike");
var spike4 = createSprite();
spike4.setAnimation("spike");

//Settings
World.frameRate = 90;
bg(randomNumber(1,3));

function draw() {
  if (game == false) {gameover(); return;}
  // controls
  movePlr();
  plrBounds();
  scoreboard();
  
  //player touching spike
  if (plr.isTouching(spike1) || plr.isTouching(spike2) || plr.isTouching(spike3) || plr.isTouching(spike4)
  || plr2.isTouching(spike1) || plr2.isTouching(spike2) || plr2.isTouching(spike3) || plr2.isTouching(spike4))
  {game = false;}
  
  drawSprites();
}

// Create your functions here
function gameover() {
  background(rgb(0, 0, 0));
  fill("red");
  textSize(50);
  textAlign(CENTER);
  text("GAME OVER", 200,200);
}
function bg(n) {
  if (n==1) {
    //bg
    background(rgb(100, 100, 255));
    //rect x1
    fill(rgb(randomNumber(0,255),randomNumber(0,255),255));
    noStroke();
    rect(randomNumber(0,100), randomNumber(0,100), randomNumber(0,300), randomNumber(0,300));
    //rect x2
    fill(rgb(randomNumber(0,255),randomNumber(0,255),255));
    noStroke();
    rect(randomNumber(0,200), randomNumber(0,200), randomNumber(0,200), randomNumber(0,200));
    //rect x3
    fill(rgb(randomNumber(0,255),randomNumber(0,255),255));
    noStroke();
    rect(randomNumber(0,300), randomNumber(0,300), randomNumber(0,100), randomNumber(0,100));
  }
  if (n==2) {
    //bg
    background(rgb(255, 100, 100));
    //rect x1
    fill(rgb(255,randomNumber(0,255),randomNumber(0,255)));
    noStroke();
    rect(randomNumber(0,100), randomNumber(0,100), randomNumber(0,300), randomNumber(0,300));
    //rect x2
    fill(rgb(255,randomNumber(0,255),randomNumber(0,255)));
    noStroke();
    rect(randomNumber(0,200), randomNumber(0,200), randomNumber(0,200), randomNumber(0,200));
    //rect x3
    fill(rgb(255,randomNumber(0,255),randomNumber(0,255)));
    noStroke();
    rect(randomNumber(0,300), randomNumber(0,300), randomNumber(0,100), randomNumber(0,100));
  }
  if (n==3) {
    //bg
    background(rgb(100, 255, 100));
    //rect x1
    fill(rgb(randomNumber(0,255),255,randomNumber(0,255)));
    noStroke();
    rect(randomNumber(0,100), randomNumber(0,100), randomNumber(0,300), randomNumber(0,300));
    //rect x2
    fill(rgb(randomNumber(0,255),255,randomNumber(0,255)));
    noStroke();
    rect(randomNumber(0,200), randomNumber(0,200), randomNumber(0,200), randomNumber(0,200));
    //rect x3
    fill(rgb(randomNumber(0,255),255,randomNumber(0,255)));
    noStroke();
    rect(randomNumber(0,300), randomNumber(0,300), randomNumber(0,100), randomNumber(0,100));
  }
  score+=1;
  spikes();
  drawSprites();
}
function movePlr() {
  if (keyDown("up") || keyDown("w") || keyDown("space") || mouseDown("leftButton")) {
    plr.velocityY = -9.8;
    plr2.velocityY = 9.8;
    if (flipped) {plr.rotation = -22.5; plr2.rotation = -157.5;}
    else {plr.rotation = 22.5; plr2.rotation = 157.5}
  }
  else {
    plr.velocityY = 9.8;
    plr2.velocityY = -9.8;
    if (flipped) {plr.rotation = -157.5; plr2.rotation = -22.5;}
    else {plr.rotation = 157.5; plr2.rotation = 22.5}
  } 
}
function plrBounds() {
  if (plr.x < 0) {plr.velocityX = 4.9; plr2.velocityX = 4.9; flipped = false; bg(randomNumber(1,3));}
  if (plr.x > 400) {plr.velocityX = -4.9; plr2.velocityX = -4.9; flipped = true; bg(randomNumber(1,3));}
  if (plr.y < 0 || plr2.y > 400) {
    plr.y = 0; plr2.y = 400;
    if (flipped) {plr.rotation = -90; plr2.rotation = -90}
    else {plr.rotation = 90; plr2.rotation = 90;}
  }
  if (plr.y > 400 || plr2.y < 0) {
    plr.y = 400; plr2.y = 0;
    if (flipped) {plr.rotation = -90; plr2.rotation = -90;}
    else {plr.rotation = 90; plr2.rotation = 90;}
  }
}
function scoreboard() {
  fill(255,255,255);
  stroke(rgb(0, 0, 0));
  textSize(32);
  text("Score: "+ score, 25,50);
}
function spikes() {
  //spike1
  spike1.scale = randomNumber(2,4)/10;
  spike1.x = randomNumber(50,350);
  spike1.y = 400 - 12.5*10*spike1.scale;
  //spike2
  spike2.scale = spike1.scale;
  spike2.x = spike1.x;
  spike2.y = 400 - spike1.y;
  spike2.rotation = 180;
  //spike3
  spike3.scale = randomNumber(2,4)/10;
  spike3.x = randomNumber(50,350);
  spike3.y = 400 - 12.5*10*spike3.scale;
  //spike4
  spike4.scale = spike3.scale;
  spike4.x = spike3.x;
  spike4.y = 400 - spike3.y;
  spike4.rotation = 180;
  
  spike1.debug = true;
  spike2.debug = true;
  spike3.debug = true;
  spike4.debug = true;
}