$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "about.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
			$.each(data, function(){
                $.each(this, function(key, value){
                    $('#team').append(
                        "<h3><i>" + value.name + "</i></h3>" + "<p>" + value.description + "</p>" + "<br><br>"
                    );
                });
            });
        }
    });
});
