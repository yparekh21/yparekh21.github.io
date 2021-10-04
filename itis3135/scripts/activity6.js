
// This function is used to prompt the user to enter a number from 1 to 10
function changeNum()
{
	do {
		var input = prompt("The Yellow Ruthless Panther would like you to pick a number from 1-10: ", "number");
		input = Math.abs(parseInt(input));
	
		if (isNaN(input) || (input > 10 || input < 0)){
			alert("Not a number or not in range");
		} else{
			validateEntry(input);
		}
	} while (isNaN(input) || (input > 10 || input < 0));
	
}


// This function validates the users input to make sure it is a number between the specified range
function validateEntry(userInput)
{ 
	
	if (isNaN(userInput)){
		changeName();
	} else {
		if (userInput <= 10 && userInput > 0){
			getShape(userInput);
		}
		else{
			changeNum();
		}
	}
}


// This function returns the polygon that corresponds to the number inputted by the user
function getShape(numSides)
{
	var shape = "";
	

	switch(numSides){
		case 1:
			shape = "Henagon";
			break;
		case 2:
			shape = "Digon";
			break;
		case 3:
			shape = "Triangle";
			break;
		case 4:
			shape = "Quadrilateral";
			break;
		case 5:
			shape = "Pentagon";
			break;
		case 6:
			shape = "Hexagon";
			break;
		case 7:
			shape = "Heptagon";
			break;
		case 8:
			shape = "Octagon";
			break;
		case 9:
			shape = "Nonagon";
			break;
		case 10:
			shape = "Decagon";
			break;
	}
	return alert(shape);
}

