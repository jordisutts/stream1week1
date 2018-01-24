describe("calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator();
    });
    
    describe("Addition function", function () {
        it("should add two numbers together and return the result", function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        
        it ("should not return 4 if the numbers don't add up to 4", function () {
            calc.add(20);
            calc.add(22);
            expect (calc.value).toBe(42);
        });
        
        it ("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.add("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
    describe("Subtract function", function() {
        it("should subtract one number from the other and return the result", function() {
            calc.sub(10);
            calc.sub(5);
            expect(calc.value).toBe(5);
        });
        it("should not return 5 if the subtract result doesn't equal 5", function() {
            calc.sub(15);
            calc.sub(6);
            expect(calc.value).toBe(9);
        });
        it ("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.sub("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    
    describe("Multiply function", function() {
        it("should multliply two numbers together and return the result", function() {
            calc.multiply(5);
            calc.multiply(2);
            expect(calc.value).toBe(10);
        });
        it ("should not return 10 if the multiply result doesn't equal 10", function () {
            calc.multiply(5);
            calc.multiply(4);
            expect(calc.value).toBe(20);
        });
        it ("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.multiply("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
    describe("Divide function", function() {
        it("should divide one number by the other number and return the result", function() {
            calc.divide(42);
            calc.divide(7);
            expect(calc.value).toBe(6);
        });
        it ("should not return 6 if the division result doesn't equal 6", function () {
            calc.divide(49);
            calc.divide(7);
            expect(calc.value).toBe(7);
        });
        it ("should have called the alert function if it returns 0", function () {
            spyOn(window, "alert");
            calc.divide(0);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
        it ("should have called the alert function if we don't give a number", function() {
            spyOn(window, "alert");
            calc.divide("Beeblebrox");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    describe("Addition function", function() {
  //      it("should return 42", function() {
    //        expect(addition(22,20)).toBe(42);
      //  });
        //it("should not return 42 if the parameters don't add up to 42", function(){
          //  expect(addition(2,2)).toBe(4);
        //});
        //it("should return an error if the parameters are not numbers", function() {
        //    expect(addition("vogon", "earth")).toBe("Error!");
        //});
        //it("should display an alert box if there is an error", function() {
         //   spyOn(window, "alert");
          //  addition("Zaphod",42);
        //    expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number!");
        //});
    //});    
//});