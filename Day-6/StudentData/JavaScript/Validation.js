$(document).ready(function(){
    alert("Document is ready.");
    $("#hide").click(function(){
        $("#details").hide();
    });
    $("#show").click(function(){
        $("#details").show();
    });
    $("#toggle").click(function(){
        $("#details").fadeToggle("slow");
    });
});