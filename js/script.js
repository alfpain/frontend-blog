// Javascript Code.
$(document).ready(function(){
    $('#texto').click(function() {
        $(this).fadeOut(10);
    });
    $("#texto").click(function(){
        $("#post1").fadeIn("fast")
        $(".aco").fadeIn("fast")
    });
    /*ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss*/
    $("button").click(function() {
        $("#post1").fadeOut(10);
        $(".aco").fadeOut("fast")

    });
    $("button").click(function(){
        $("#texto").fadeIn("fast")
    });
    $(".button1").click(function() {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append("<div class='item'>" + toAdd + "</div>" );
        }),
        $(document).on("click",".item", function(){
            $(this).remove()
            });


    });