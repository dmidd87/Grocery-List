$(document).ready(function() {

    $("#add").click(function() {
        var inputValue = $("#input").val();
        
        $("list").append("<p>"+inputValue+"<a class='delete'> X </a></p>");
    });
    
    
});


    
