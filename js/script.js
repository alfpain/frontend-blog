// Javascript Code.
$(document).ready(function(){
    $('#texto').click(function() {
        $(this).fadeOut(10);
    });
    $("#texto").click(function(){
        $("#post1").fadeIn("fast")
        $(".aco").fadeIn("fast")
        $("#comentario").load("_posts/2014-11-09-cognits-frontend-blog.md");
    });
    /*ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss*/
    $("button").click(function() {
        $("#post1").fadeOut(10);
        $(".aco").fadeOut("fast")

    });
    $(".blog").click(function() {
     $("#post1").fadeOut(10);
    $(".aco").fadeOut("fast")

    });

    $("button").click(function(){
        $("#texto").fadeIn("fast")
    });
    $(".blog").click(function(){
        $("#texto").fadeIn("fast")
    });

    $(".button1").click(function() {
        var m = new Date();
var dateString =
  m.getUTCFullYear() +"/"+
  ("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
  ("0" + m.getUTCDate()).slice(-2) + " " +
  ("0" + m.getUTCHours()).slice(-2) + ":" +
  ("0" + m.getUTCMinutes()).slice(-2) + ":" +
  ("0" + m.getUTCSeconds()).slice(-2);
        var toAdd2 = $("input[name=checkListItem2]").val();
        var toAdd = $("input[name=checkListItem]").val();
        $("input").val("");
        $(".list").append("<div class='item'>" +"Usuario: "+ toAdd +"<br/>"+"comment: "+toAdd2+ "<br/>"+ dateString+"</div>" );
        }),
        $(document).on("click",".item", function(){
            $(this).remove()
            });
    


    $(".button2").click(function() {
               var m2 = new Date();
var dateString2 =
  m2.getUTCFullYear() +"/"+
  ("0" + (m2.getUTCMonth()+1)).slice(-2) +"/"+
  ("0" + m2.getUTCDate()).slice(-2) + " " +
  ("0" + m2.getUTCHours()).slice(-2) + ":" +
  ("0" + m2.getUTCMinutes()).slice(-2) + ":" +
  ("0" + m2.getUTCSeconds()).slice(-2);

        var toAdd4 = $("input[name=checkListItem4]").val();
        var toAdd3 = $("input[name=checkListItem3]").val();
        $("input").val("");
        $(".list2").append("<div class='item'>" +"Usuario: "+ toAdd3 +"<br/>"+"comment: "+toAdd4+ "<br/>"+ dateString2+"</div>" );
        }),
        $(document).on("click",".item", function(){
            $(this).remove()
            });


    });