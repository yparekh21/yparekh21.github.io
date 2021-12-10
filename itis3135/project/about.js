$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "contact.json",
        beforeSend: function() {
            $("#contactInfo").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
			$.each(data, function(){
                $.each(this, function(key, value){
                    $('#contactInfo').append(
                        "<p><b>" + value.name + ":</b> " + value.description + "</p>" + "<br><br>"
                    );
                });
            });
        }
    });
});
