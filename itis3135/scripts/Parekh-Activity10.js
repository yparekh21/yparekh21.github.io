$(document).ready(function() {
	// preload images 
    $("#image_list a").each(function() { 
        var swappedImage = new Image(); 
        swappedImage.src = $(this).attr("href"); 
    }); 
 
    // set up event handlers for links     
    $("#image_list a").click(function(evt) {

        var imageURL = $(this).attr("href"); 
        var caption = $(this).attr("title"); 
		$("#image, #caption").fadeOut(3000,
			function() {
				$("#caption").text(caption).fadeIn(3000);
				$("#image").attr("src", imageURL).fadeIn(3000);
				$("#caption").delay(3000).animate({
				  "font-size": "2em"
				}, 3000);
			}
			
		);
		
                 
        // cancel the default action of the link 
        evt.preventDefault();  // jQuery cross-browser method 
		
    }); // end click 
	
	
 
    // move focus to first thumbnail 
    $("li:first-child a").focus();

}); // end ready


			