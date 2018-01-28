$(document).ready(function () {
	$("button").click(function(){
		if ($("input.emailfield").val() == ""){
			$("input.emailfield").val() == "Please Enter Email"
		}
		else {
			var email = $("input.emailfield").val()
		}
	});
   	
});