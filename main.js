
// Create canvas variable
var canvas = newfabric.Canvas('myCanvas')
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("ball-h1.png", function(Img) {
		ball_obj = Img;
	
		ball_obj.scaleToWidth(block_image_width);
		ball_obj.scaleToHeight(block_image_height);
		ball_obj.set({
		top:player_y,
		left:player_x
		});
		canvas.add(ball_abj);
	
		});
	new_image();
}

function new_image()
{    
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
	
		ball_obj.scaleToWidth(block_image_width);
		ball_obj.scaleToHeight(block_image_height);
		ball_obj.set({
		top:player_y,
		left:player_x
		});
		canvas.add(ball_abj);
	
		});
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_x >5)
		{
			ball_y = ball_y + block_image_height;
		console.log("block_image_height =" + block_image_height);
		console.log("When Down arrow key is pressed, X = " + ball_x +" , Y ="+ball_y);
		canvas.remove(ball_obj);
		new_image();// Write a code to move ball left side.
		}// Write a code to move ball upward.
	}

	function down()
	{    
		if(ball_x >450)
		{
			ball_y = ball_y + block_image_height;
		console.log("block_image_height =" + block_image_height);
		console.log("When Down arrow key is pressed, X = " + ball_x +" , Y ="+ball_y);
		canvas.remove(ball_obj);
		new_image();// Write a code to move ball left side.
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x + block_image_height;
		console.log("block_image_height =" + block_image_height);
		console.log("When Down arrow key is pressed, X = " + ball_x +" , Y ="+ball_y);
		canvas.remove(ball_obj);
		new_image();// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
			ball_x = ball_x + block_image_height;
		console.log("block_image_height =" + block_image_height);
		console.log("When Down arrow key is pressed, X = " + ball_x +" , Y ="+ball_y);
		canvas.remove(ball_obj);
		new_image();// Write a code to move ball left side.
		// Write a code to move ball right side.
		}
	}
	


