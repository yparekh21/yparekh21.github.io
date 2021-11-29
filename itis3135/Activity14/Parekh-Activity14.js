$(document).ready(function() {
    $("li a").each(function(){
        // the event handler for clicking each element
        $(this).click(function(){
            $.ajax({
                type: "get",
                url: "json_files/" + this.title + ".json",
				beforeSend: function() {$("main").html("Loading...");}, 
				timeout: 10000, 
				error: function(xhr, status, error) { 
					alert("Error: " + xhr.status + " - " + error); 
				}, 
                dataType: "json",
                success: function(data) {
                   $("main").empty();
                   $.each(data, function(){
                       $.each(this, function(key, value){
                            $("main").append($(
								"<h1>" + value.title + "</h1>"
                                + "<h2>" + value.month + "</h2>"
                                + "<h3>" + value.speaker + "</h3>"
                                + "<img src=" + value.image + " alt=" + this.title + "_picture"
                                + "<p>" + value.text + "</p>")
                            );
                        })
                    });
                }
            })
        });
    });
}); // end ready