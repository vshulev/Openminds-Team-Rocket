$(function() {

	$("#searchform").submit(function(evt)  {
		evt.preventDefault();
		var mID = $("#searchform input").val()
		window.location.href = "http://localhost:3000/machineInfo/" + mID;
	});

});
