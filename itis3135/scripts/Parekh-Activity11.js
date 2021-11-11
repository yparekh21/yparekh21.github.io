<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
    $("#tabs").accordion({
		event: "click",
		heightStyle: "content",
		collapsible: true
	});
});