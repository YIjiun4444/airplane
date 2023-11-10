function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	
}

function draw() {
	
	//background(0,5);
	

	if(mouseIsPressed)
		{if(mouseButton == LEFT)
		translate(mouseX, mouseY)
		background(0,10);	
		 noStroke(); 	
		 	fill(mouseX, mouseY, 251);
			beginShape(TRIANGLES);
		 
				vertex(30, 75);
				vertex(40, 35);
				vertex(10, 70);
		    
		    vertex(30, 75);
				vertex(40, 35);
				vertex(15, 85);
		    
		    vertex(30, 75);
				vertex(40, 35);
				vertex(35, 85);
		    
		  
			endShape();
	 }else{
		   
		 
		 translate(mouseX, mouseY)
		   //noFill();		
       //colorScheme = ['#ED1C24','#FDFFFC','#235789','#f1d302','#33673b'];
	   colorScheme = ['#d9effc','#1492E1','#43ADEF','#F2FF49','#65A46F'];
		 
		 angleMode(RADIANS); // Change the mode to DEGREES RADIANS
    	  let a = random(0, 10);
    		push();
    		rotate(a);	
	
		 noFill();
 	 	  //arc(50, 55, 60, 60, HALF_PI, PI);
  	  //arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
	    //arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
	
		 //fill(50);	
		 beginShape(TRIANGLES);
		 
				vertex(30, 75);
				vertex(40, 35);
				vertex(10, 70);
		    
		    vertex(30, 75);
				vertex(40, 35);
				vertex(15, 85);
		    
		    vertex(30, 75);
				vertex(40, 35);
				vertex(35, 85);
		    
		  
			endShape();	
	
	  let colorSchemeIndex = int(random(0,3));
				stroke(colorScheme[colorSchemeIndex])
		 
		 
		 
		 //noStroke(); 	
		 	//fill(mouseX, mouseY, 251);
			//ellipse(mouseX, mouseY, 50, 50)
	
		 
		 }
		 //background(0,1);
	
	
	

 
}