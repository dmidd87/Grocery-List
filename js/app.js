$(document).ready(function() {

    $("#add").click(function() {
        var inputValue = $("#input").val();
        
        $("#list").prepend("<p>"+inputValue+"<a class='delete'> X </a></p>");
        
            
    });
    
    
    $(".delete").click(function() {
            $(".delete").remove("+inputValue+");
    });
        
    
});

    
