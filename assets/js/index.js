$(document).ready(function() {
	console.log("ready");

	$("#save").click(function() {
		document.cookie = "sugar=" + form.sugar.value
		document.cookie = "chocolate=" + form.chocolate.value
		document.cookie = "lemon=" + form.lemon.value

	});

	$("#sugar")[0].value = $.cookie("sugar") || ""
	$("#chocolate")[0].value = $.cookie("chocolate") || ""
	$("#lemon")[0].value = $.cookie("lemon") || ""

	$("#addOneSugar").click(function() {
		var sugar = $("#sugar");
		sugar.val(parseInt(sugar.val()) + 1);
	});

	$("#addOneChocolate").click(function() {
		var chocolate = $("#chocolate");
		chocolate.val(parseInt(chocolate.val()) + 1);
	});

	$("#addOneLemon").click(function() {
		var lemon = $("#lemon");
		lemon.val(parseInt(lemon.val()) + 1);
	});
});
/* enter correct repository in terminal documents/projects/cookies(master) 
Then run this in terminal:
echo -e '\nalias served="ruby -run -e httpd . -p 5000"' >> ~/.bash_profile && source ~/.bash_profile
Then type 'served' in terminal
Then enter visit this site in browser:
http://localhost:5000/