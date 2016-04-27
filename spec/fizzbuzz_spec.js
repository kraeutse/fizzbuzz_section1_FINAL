var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it ("can count from 1 to 100 and do fizzbuzz replacements", function() {
		expect(count(1,5)) .toBe("1 2 Fizz 4 Buzz");
		expect(count(10,15)) .toBe("Buzz 11 Fizz 13 14 Fizzbuzz");

	});

	it ("can convert multiples of 3 into 'Fizz'", function() {
		expect(fizzer(3)).toBe("Fizz");
		expect(fizzer(33)).toBe("Fizz");
		expect(fizzer(4)).toBe(4);
		expect(fizzer(8)).toBe(8);
	});

	it ("can convert multiples of 5 into 'Buzz'", function() {
		expect(buzzer(5)).toBe("Buzz");
		expect(buzzer(10)).toBe("Buzz");
		expect(buzzer(18)).toBe(18);
		expect(buzzer(21)).toBe(21);
	});

	it ("can convert multiples of 3 and 5 and 15 into 'Fizzbuzz'", function () {
		expect(fizzbuzzer(15)).toBe("Fizzbuzz");
		expect(fizzbuzzer(30)).toBe("Fizzbuzz");
		expect(fizzbuzzer(44)).toBe(44);
		expect(fizzbuzzer(51)).toBe(51);
			})
});