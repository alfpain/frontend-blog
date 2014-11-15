// Javascript Code.
$(document).ready(function(){

    $('#texto').click(function() {
        $(this).fadeOut(10);
        $("#texto2").fadeOut(10);
        $("#texto3").fadeOut(10);
    });
    $("#texto").click(function(){
        $("#post1").fadeIn("fast") /* este va ser que aparesca mi div principal decis vos*/
        $(".aco").fadeIn("fast") /*este es ek div donde esta guardado mi post y mi comentario */
        $("#comentario").load("_posts/2014-11-09-cognits-frontend-blog.md"); /* y este ese es el post donde lo carga*/
    });
    /*ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss*/
    $("button").click(function() {
        $("#post1").fadeOut(10);
        $(".aco").fadeOut("fast");


    });
    $(".blog").click(function() {
     $("#post1").fadeOut(10);
    $(".aco").fadeOut("fast")


    });
    $(".home").click(function() {
     $("#post1").fadeOut(10);
    $(".aco").fadeOut("fast")


    });

    $("button").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn("fast");
    });
    $(".blog").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn("fast");
    });

    $(".home").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn("fast");
    });

    /*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
 $('#texto2').click(function() {
        $(this).fadeOut(10);
        $("#texto").fadeOut(10);
        $("#texto3").fadeOut(10);
    });

$("#texto2").click(function(){
        $("#post12").fadeIn("fast")
        $(".aco2").fadeIn("fast")
        $("#comentario2").load("_posts/post.md");
    });
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    $(".but2").click(function() {
        $("#post12").fadeOut(10);
        $(".aco2").fadeOut("fast");
      });

  $(".home").click(function() {
     $("#post12").fadeOut(10);
    $(".aco2").fadeOut("fast")
    });


    $(".blog").click(function() {
     $("#post12").fadeOut(10);
    $(".aco2").fadeOut("fast")


    });

    $(".but2").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn(10);
    });
    $(".blog").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn(10);
    });

    $(".home").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn("fast");
    });

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
 $('#texto3').click(function() {
        $(this).fadeOut(10);
        $("#texto").fadeOut(10);
        $("#texto2").fadeOut(10);
        $("#texto3").fadeOut(10);
    });

$("#texto3").click(function(){
        $("#post13").fadeIn("fast")
        $(".aco3").fadeIn("fast")
        $("#comentario3").load("_posts/post.md");
    });
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
    $(".but3").click(function() {
        $("#post13").fadeOut(10);
        $(".aco3").fadeOut("fast");

});
    $(".home").click(function() {
     $("#post13").fadeOut(10);
    $(".aco3").fadeOut("fast")




    });
    $(".blog").click(function() {
     $("#post13").fadeOut(10);
    $(".aco3").fadeOut("fast")


    });

    $(".but3").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn("fast");
    });
    $(".blog").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn("fast");
    });
    $(".home").click(function(){
        $("#texto").fadeIn("fast")
        $("#texto2").fadeIn("fast")
        $("#texto3").fadeIn("fast");
    });


/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

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

    $("#but").click(function() {
        var m = new Date();
var dateString =  m.getUTCFullYear() +"/"+
  ("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
  ("0" + m.getUTCDate()).slice(-2) + " " +
  ("0" + m.getUTCHours()).slice(-2) + ":" +
  ("0" + m.getUTCMinutes()).slice(-2) + ":" +
  ("0" + m.getUTCSeconds()).slice(-2);
        var toAdd2 = $("input[name=checkListItem4]").val();
        var toAdd = $("input[name=checkListItem3]").val();
        $("input").val("");
        $(".list2").append("<div class='item'>" +"Usuario: "+ toAdd +"<br/>"+"comment: "+toAdd2+ "<br/>"+ dateString+"</div>" );
        });

    $("#but2").click(function() {
        var m = new Date();
var dateString =  m.getUTCFullYear() +"/"+
  ("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
  ("0" + m.getUTCDate()).slice(-2) + " " +
  ("0" + m.getUTCHours()).slice(-2) + ":" +
  ("0" + m.getUTCMinutes()).slice(-2) + ":" +
  ("0" + m.getUTCSeconds()).slice(-2);
        var toAdd2 = $("input[name=checkListItem6]").val();
        var toAdd = $("input[name=checkListItem5]").val();
        $("input").val("");
        $(".list3").append("<div class='item'>" +"Usuario: "+ toAdd +"<br/>"+"comment: "+toAdd2+ "<br/>"+ dateString+"</div>" );
        });
		
	
		
    });
	
$.expr[':'].icontains = function(obj, index, meta, stack){
        return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
        };
     
     
        $(document).ready(function(){    
       
            $('#buscador').keyup(function(){
       
                         buscar = $(this).val();
                         $('.lista p').removeClass('resaltar');
             
                                if(jQuery.trim(buscar) != ''){
                                   
                                   $(".lista p:icontains('" + buscar + "')").addClass('resaltar');
                                 
                                }
       
       
                });
        });
	
$(document).ready(function() {
	$('.buscador').hide();
    $('.buscar').click(function() {
        $('.buscador').show();

	});
	$('.blog').click(function() {
		$('.buscador').hide();

		$('resaltar').hide();
    });
		$('.home').click(function() {
		$('.buscador').hide();

		$('resaltar').hide();
    });
});
