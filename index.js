
size(500,500);

noStroke();

var speed = 5;
var up = 0;
var down = 0;
var left = 0;
var right = 0;
var goldenstufPoints = 0;
var walls = [{x: 0, y:0, w: 500, h: 50},
            {x: 0, y:0, w:50, h: 500},
            {x: 0, y:450, w:500, h:50},
            {x: 450,y: 50, w:50, h:450},
            {x: 0, y: 100, w: 200, h: 50},
            {x:300 , y:350 , w: 200, h: 50}];
var goldenstuf = [];
 
for (var blerrp = 0; blerrp < 1000;blerrp = blerrp + 1){
  goldenstuf.push({x: random(500) , y: random(500) , w: 2, h: 2, show: 1});
} 

var collision = function(obj1, obj2) {

  if (obj1.x + obj1.w > obj2.x &&
      obj1.x < obj2.x + obj2.w &&
      obj2.y + obj2.h > obj1.y &&
      obj2.y < obj1.y + obj1.h) {
      return true;
  } else {
      return false;
  }

};

var player = {x: 225, y: 225, w: 50, h: 50};
var nukeloos = {x: 230, y:230, w: 15, h: 15};
var bouncers = [{x:42, y: 222, w: 42, h: 42, spd: PI, axis: "hor"}];

 
var draw = function() {
   
  background(255,80,80);
  checkGold();
  move(player, speed);
  drawPlayer();
  drawwalls();

  //poiuytrewq
  for (var i = 0; i < bouncers.length; i++) {
    if (bouncers[i].axis === "hor") {
      bouncers[i].x = bouncers[i].x + bouncers[i].spd;
    }
    rect(bouncers[i].x,bouncers[i].y,bouncers[i].w,bouncers[i].h);
  }

for (var j = 0; j < walls.length; j++) {

}

  fill(0, 255, 15); //color of food particles
  
  for (var i = 0; i < goldenstuf.length; i = i + 1) {
    if (goldenstuf[i].show==1) 
      rect(goldenstuf[i].x, 
          goldenstuf[i].y,
          goldenstuf[i].w, 
          goldenstuf[i].h);
      goldenstuf[i].x += random(-4,4);
      goldenstuf[i].y += random(-4,4);
  }

  fill(0);
  textSize(14);
  text("goldenstuf: " + goldenstufPoints, 10, 490);
};


var move = function(obj, speed){
  if (left == 1) {
    obj.x =  obj.x - speed; 
    for(var i = 0; i < walls.length; i++ ){
      while (collision(obj,walls[i])){
        obj.x = obj.x + 1;
      }
    }
  }
  if (right == 1) {
    obj.x = obj.x + speed; 
     for(var i = 0; i < walls.length; i++ ){
       while (collision(obj,walls[i])){
      obj.x = obj.x - 1;
       }
    } 
  }
  if (up == 1) {
     obj.y =  obj.y - speed; 
     for(var i = 0; i < walls.length; i++ ){
       while (collision(obj,walls[i])){
      obj.y = obj.y + 1;
         
       }
    }
  }
  if (down == 1){
     obj.y =  obj.y + speed; 
    for(var i = 0; i < walls.length; i++ ){
       while  (collision(obj,walls[i])){
      obj.y = obj.y - 1;
         
       }
    }
  }
};


var keyPressed = function() { 
  if (keyCode == LEFT) {
    left = 1;
  } 
  if (keyCode == RIGHT) {
    right = 1;
  }  
 
  if (keyCode == UP){ 
    up = 1;
  }
 
  if (keyCode == DOWN){ 
    down = 1;
  }
};

var keyReleased = function() {  
if (keyCode == RIGHT){ 
 right = 0;
 }
 if (keyCode == LEFT){ 
 left = 0;
 }
if (keyCode == UP){ 
 up = 0;
 }
if (keyCode == DOWN){ 
 down = 0;
 }  
  
};


var checkGold = function(){
  for (var meep= 0; meep < goldenstuf.length; meep += 1) {
    if (collision(player,goldenstuf[meep]) && goldenstuf[meep].show == 1 ) {
      goldenstuf[meep].show = 0;
    goldenstufPoints += 1
      
    }
  }
};

var drawPlayer = function() {
  var mitocan = [{x: player.x+2, y: player.y+1, w: 10, h: 5},
                 {x: player.x + 37, y: player.y + 23, w: 10, h: 5},
                 {x: player.x+20, y: player.y+38, w: 10, h: 5},
                 {x: player.x+28, y: player.y+5, w: 10, h: 5}];
  
  fill(0, 255, 255); //color of player
  rect( player.x,  player.y, player.w, player.h); // draw the player's x/y
  fill(255, 80, 80); //color of nukeloos
  rect( player.x + 8,  player.y + 8, nukeloos.w, nukeloos.h); 
  fill(255,255,0);
  for (var i = 0; i < mitocan.length; i+= 1) {
    rect(mitocan[i].x, mitocan[i].y, mitocan[i].w, mitocan[i].h);
  }
}
var drawwalls = function(){
  fill(250,118,250); //color of walls
  for (var i = 0; i < walls.length; i = i + 1) {
    rect(walls[i].x, 
          walls[i].y,
          walls[i].w, 
          walls[i].h);
  }
   
}




