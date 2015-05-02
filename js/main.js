$(document).ready(function(){
	/* Sieve Of Eratosthenes */
	// 1) Generate an array [from 0] until the number given
	var primes = [];
	var number = parseInt($('#number').val());
	for (var i = 0; i <= number; i += 1){
		if(i < 2) {primes.push(false)}	// i=0 or i=1 are not primes...
		else {primes.push(true)}				// ...but the other ones can be
	}

	// 2) Let's do the 'test' after clicking the button
	$("button").on("click", function(){
		// Doing the 'test'
		for(var test = 2; test <= Math.ceil(Math.sqrt(number)); test += 1){
			if(primes[test]){
				//
				for(var index = test + 1; index <= number; index += 1){
					// checking divisibility among numbers
					if(index % test == 0){
						// if index divides a test number, it's not prime
						primes[index] = false;
					}
				}
			}
		}

		// Clean output
		$('#result').empty();

		// Traversing the resulting array
		for(var x in primes){
			// Show only prime numbers
			if(primes[x]){
				$('#result').append('<span class="number">' + x + '</span>');
			}
		}
	});
});
