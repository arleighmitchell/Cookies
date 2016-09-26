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
});