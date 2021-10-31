var order = [];

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	}; // end onload
	
	var total = 0.0;
	//add onclick event handler for each image
	function addEspresso() {
        total += 1.95;
		order.push("$1.95 - Espresso - Delicious espresso. Wanna try it?");
		display();
    }; // end click 
	
	function addCappuccino() {
        total += 3.45;
		order.push("$3.45 - Cappuccino - Delicious Cappuccino!");
		display();
    }; // end click 
	
	// for click event add item to order and update total
	
	// display order and total
	function display() {
		var obj = document.getElementById("order");
		obj.remove();
		for(var i = 0; i < order.length; i++)
		{
			document.getElementById("order").innerHTML += order[i];
		}; 
		
	}
		
