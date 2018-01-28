$(document).ready(function () {
	$("button").click(function(){
		if ($("input.emailfield").val() == ""){
			$("input.emailfield").val() == "Please Enter Email"
		}
		else {
			var email = $("input.emailfield").val()
		}
	});

	$(".navoption").mouseenter(function () {
		
		console.log("hovered");

		$(this).find("a").css("color", "#252525");

	}).mouseleave(function () {
		$(this).find("a").css("color", "#757575");
	});
	
});

