function displaytheData()
{
	var info = "<p><b>Name:</b> " + document.getElementById("name").value + "</p><br>" +
	"<p><b>Phone Number: </b>" + document.getElementById("tel").value + "</p><br>" +
	"<p><b>Email: </b>" + document.getElementById("email").value + "</p><br>" +
	"<p><b>Service Requested: </b>" + document.getElementById("serviceType").value + "</p><br>";
	
	document.getElementById("displayUserInfo").innerHTML = info;
}