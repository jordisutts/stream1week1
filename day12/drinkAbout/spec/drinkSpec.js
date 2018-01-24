describe ("whatCanIdrink", function() {
    
    describe("age", function() {
        it ("should show error if age is 0", function() {
            expect(whatCanIdrink(0)).toBe("Sorry. I can't tell you what drink because the age is incorrect.");
        });
    });
});
describe ("fizzBuzz", function() {
    
    describe ("number", function() {
        it("should count up numbers showing what number had been entered", function() {
            expect(fizzBuzz(1)).toBe(1);
        });
            it("should replace numbers divisible by 3 with the word Fizz", function () {
                expect(fizzBuzz(3)).toBe("Fizz");
        });
            it("should replace numbers divisible by 5 with the word Buzz", function (){
                expect(fizzBuzz(5)).toBe("Buzz");
        });
            it("should replace numbers divisible by 7 with the words Pop", function () {
                expect(fizzBuzz(7)).toBe("Pop");
        });
            it("should replace numbers divisible by both 3 and 5 with the words FizzBuzz", function () {
                expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
            it("should replace numbers divisible by both 3 and 7 with the words FizzPop", function () {
                expect(fizzBuzz(21)).toBe("FizzPop");
        });
            it("should replace numbers divisible by both 5 and 7 with the words BuzzPop", function () {
                expect(fizzBuzz(35)).toBe("BuzzPop");
        });
            it("should replace numbers divisible by both 3, 5 and 7 with the words FizzBuzzPop", function () {
                expect(fizzBuzz(105)).toBe("FizzBuzzPop");
        });
    });
});
