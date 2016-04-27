count = function(start,end) {
	//create a variable for our output
	var output = buzzer(fizzer(fizzbuzzer(start)));

	//modify output to look like what we want
	for (var i = start; i < end; i += 1){
		//code to be repeated goes here
		output = output + " " + buzzer(fizzer(fizzbuzzer(i + 1))); 
	}
	//return the output; e.g. "1 2 3 4 5"
	return output;
};

fizzer = function(num) {
  return 0 === num % 3 ? "Fizz" : num
};

buzzer = function(num) {
  return 0 === num % 5 ? "Buzz" : num
};

fizzbuzzer = function(num) {
  return 0 === num % 15 ? "Fizzbuzz" : num
};
