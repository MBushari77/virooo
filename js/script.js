// Fathi's work starts here
$('.burger').click(function(){
    $('.dropDown').slideToggle(400, 'swing');
})
// Fathi's work ends here



$(document).ready(function() {
	$('#condetionBtn').click(function(){
		$('.condetion').slideToggle();
		$('.with_cond').slideToggle();

	});
	$('#x_condetionBtn').click(function(){
		$('.condetion').slideToggle();
		$('.with_cond').slideToggle();

	});

});

function hi(step){
	if (document.querySelector('.' + step).style.display == "none") {
		document.querySelector('.' + step).style.display = "none";
	}
	else{
		alert('true')
		document.querySelector('.' + step).style.display = "none";
	}
}


document.querySelector('#cb').value = "off";
function change(x){			
	if (document.getElementById(x).value == "off") {
		document.getElementById(x).value = "on";
	} else {
		document.getElementById(x).value = "off";
	}
	// alert(x + " "  + document.getElementById(x).value);
}