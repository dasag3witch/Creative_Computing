//setting values pixels will randomly switch between
let colors = ["black","white", "grey"]

//setting circle radii
let circle_1 = 50;
let circle_2 = 50;
let circle_3 = 50;
let circle_4 = 50;

function setup() {
  //creating a canvas
  createCanvas(400, 400);

  //white bg
 background ("white");
}



  function draw() {
    //red circle
    fill ("red");
    circle(0,0,circle_1);

    //green circle
    fill ("green");
    circle(400,0,circle_2);

    //blue circle
    fill("blue");
    circle(0,400,circle_3);

    //yellow circle
    fill("yellow");
    circle(400,400,circle_4);
    
    //pixel trail
    fill (random(500));
    square(mouseX, mouseY, 10);


//when cursor is near a circle, pixels change to that color:
if (mouseX <= circle_1 && mouseY <= circle_1) {
    fill ("red")
      square(mouseX, mouseY, 10); //red
  console.log("you want more red.")
  circle_1 += 0.5;
  
} else if (mouseX >= 400-circle_2 && mouseY <= circle_2) {
  fill("green")
  square(mouseX, mouseY, 10); // green
    console.log("you want more green.")
    circle_2 += 0.5;
  
} else if (mouseX <= circle_3 && mouseY >= 400-circle_3) {
  fill("blue")
  square(mouseX, mouseY, 10); // blue
    console.log("you want more blue.")
    circle_3 += 0.5;
  
} else if (mouseX >= 400-circle_4 && mouseY >= 400-circle_4) {
  fill("yellow")
  square(mouseX, mouseY, 10); // yellow
    console.log("you want more yellow.")
    circle_4 += 0.5;
}


    
}
  








  

