$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "about.json",
        beforeSend: function() {
            $("#reviews").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#reviews").html("");
			$.each(data, function(){
                $.each(this, function(key, value){
                    $('#reviews').append(
                        "<h3><i>" + value.name + "</i></h3>" + "<p>" + value.description + "</p>" + "<br><br>"
                    );
                });
            });
        }
    });
});
