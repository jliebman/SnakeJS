//SNAKE JS
var score;
var ended = 0;
var head = [30, 150, "right"];
function startGame()
{
var c = document.getElementById("canvasId");
var ctx = c.getContext("2d");
   score = 30;
   ctx.rect(0, 150, score, 10);
   ctx.fillStyle = "green";
   ctx.fill();
   head[0] = 30;
   head[1] = 150;
   head[2] = "right";
  
   timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[0] += 10;
			}, 100);
  
}
function turnRight()
{
	var c = document.getElementById("canvasId");
	var ctx = c.getContext("2d");
	clearInterval(timer);
	switch(head[2])
	{
		case "right": 
		head[2] = "up";
		   timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[1]+=10;
			}, 100);
		break;
		case "left":
		head[2] = "down";
		   timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[1]-=10;
			}, 100);
		break;
		case "up":
		head[2] = "left";
		   timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[0]-=10;
			}, 100);
		break;
		case "down":
		head[2] = "right";
		   timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[0]+=10;
			}, 100);
		break
		default:
		break;
	}
}
function turnLeft()
{
	var c = document.getElementById("canvasId");
	var ctx = c.getContext("2d");
	clearInterval(timer);
	switch(head[2])
	{
		case "right": 
		head[2] = "down";
		 timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[1]-=10;
			}, 100);
		break;
		case "left":
		head[2] = "up";
		 timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[1]+=10;
			}, 100);
		break;
		case "up":
		head[2] = "right";
		 timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[0]+=10;
			}, 100);
		break;
		case "down":
		head[2] = "left";
		 timer = setInterval(function(){
			endGame();
			ctx.rect(head[0], head[1], 10, 10);
			ctx.fillStyle = "green";
			ctx.fill();
			head[0]-=10;
			}, 100);
		break
		default:
		break;
	}
}
function endGame()
{
	var c = document.getElementById("canvasId");
	var ctx = c.getContext("2d");
	if(head[0] == 0 || head[0] == 300 || head[1] == 0 || head[1] == 300)
	{
		ctx.rect(0, 0, 300, 300);
		ctx.fillStyle = "orange";
		ctx.fill();
		ended = 1;
	}
}
