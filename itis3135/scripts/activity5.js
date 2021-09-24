
		var name;
		var companyName = "Yellow Ruthless Panther";
		var feeling;
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes();
		
		//Introductions
		name = prompt("What is your name?", "name");
		feeling = prompt("How are you doing?", "great");
	
		document.write("<h3 style=\"text-align: center; border: medium solid black;\">Today is " + today.toDateString() + ", and the time is: " + time
						+ "<br>The " + companyName + " welcomes you, " + name + "!<br>"
						 + "We're glad you are doing " + feeling + "!<br></h3>");
		
		//function to find total expenditure
		function charge(){
			var traffic;
			var totalExpenditure;
			let perPerson = 0.02;
			traffic = prompt("What is the expected traffic you intend to get on this website (in thousands)?");
			traffic = parseInt(traffic) * 1000;
			
			totalExpenditure = traffic * perPerson;
			return alert("Considering your expected traffic of " + traffic + " thousand users. Your expected total expenditure for this website will be $" + totalExpenditure + ".");
		}
		
		//funny web design pun
		function webJoke(){
			return alert("A user interface is like a joke. If you have to explain it....it's not that good.");
		}
		
		//display contact info
		function contact(){
			return alert("Email: yellow@panther.com\nPhone Number: 704-PAN-THER\nAddress: 1815 Green Street, Charlotte, NC 28202");
		}
		
		//message from sponsors
		function sponsor(){
			return alert("Here's a message from our sponsor:\nHave you had trouble sleeping lately? Have you tried numerous \"industry leading\" products but none seem to work?\nWell look no further, with Nighties you will have the best sleep you've ever had. For a small price of $19.99 you'll be able to go back to your old self.\nCheck out Nighties today!");
		}
		
		//About us
		function aboutUs(){
			return alert("We will offer our industry-leading tools to create an engaging and informative web design for your company. We will strive to reach your needs and implore you to reach out with any questions or concerns.");
		}
		
		


