$(document).ready(function(){
	/* Sieve Of Eratosthenes */
	// 1) Generate an array [from 0] until the number given
	var array = [];
	var number = parseInt($('#number').val());
	for (var i = 0; i <= number; i += 1){
		if(i < 2) {array.push(false)}	// i=0 or i=1 are not primes...
		else {array.push(true)}				// ...but the other ones can be
	}

	// 2) Let's do the 'test' (it's an event fired from the button 'Go')
	$(':button').click(function(){

	});
});
