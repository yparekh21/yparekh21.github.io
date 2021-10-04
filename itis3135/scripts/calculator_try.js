//function that display value -- basic inspiration from https://www.geeksforgeeks.org/html-calculator/
function displayValue(disValue)
{
	document.getElementById("display").value += disValue;
}

// function that will display the result as an alert
function result()
{
	var display = document.getElementById("display").value;
	return alert("The answer is: " + eval(display));
}

// function to clear the display's text
function clearDisplay()
{
	document.getElementById("display").value = "";
}


        