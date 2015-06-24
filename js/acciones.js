// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnvibrar').on('tap',function (){
		navigator.vibrate(1000);
	});
	$('#btnbeep').on('tap',function (){
		navigator.notification.beep(1);
	});
	$('#izquierda').on('swipeleft',function (){
		alert("Barrio a la izquierda")
	});
	
}); 
});

