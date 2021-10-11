//person and salaries arrays
var person = [];
var salaries = [];

//when the website loads, the cursor will be placed on the name input
window.onload = function() 
{
    document.getElementById("employeePeople").focus();
}

function addSalary()
{
	// the employee name will be added to addPer
	addPer = document.getElementById("employeePeople").value;
	
	// adds salary for employee making sure the input is a number and not empty
	do {
		var addSal = window.prompt("Please enter " + addPer + "'s salary:");
	
		if (addSal == "" || isNaN(addSal))
		{
			window.alert("Please enter a valid salary.");
		} else{
			break;
		}
	} while (addSal == "" || isNaN(addSal));
		
	// pushes values into respective arrays
	person.push(addPer);
	salaries.push(addSal);
	
	document.getElementById("employeePeople").focus();
	
}


function displayResults()
{
	//finds the sum of the salaries
	var sumSalaries=0;
    for(var i = 0; i < salaries.length; i++)
    {
         sumSalaries += parseInt(salaries[i]);
    }
	
	//calculates average of salaries and largest salary
    var average = sumSalaries/salaries.length;
    var largestSalary = Math.max(...salaries);
	
	document.getElementById("results").innerHTML = "<p> Largest Salary = " + largestSalary + "</p>" + "<p> Average Salary = " + average;
}

function displaySalary()
{
	//inputs the respective elements of the table into their positions.
	var table = "<table>"
    for(var i = 0; i < person.length; i++)
    {
		table +="<tr><td>" + person[i] + "</td><td>"+ salaries[i] +"</td></tr>";
    }
    table += "</table>";
    document.getElementById("results_table").innerHTML += table;
}