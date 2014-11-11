// Javascript Code.
$(document).ready(function(){
	$('.post').fadeTo('fast',-10)
    $('#texto').click(function() {
        $(this).fadeOut('slow');
    });
    $(".blog").click(function(){
    	$("#texto").fadeIn("slow")
    })
    });