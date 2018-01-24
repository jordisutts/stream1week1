let Calculator = function () {
    this.value = 0;
    this.firstNumber = true;
};

Calculator.prototype.add = function(number) {
    if (typeof(number)=="number") {
        this.value += number;
    } else {
        alert("Argument must be a number");
    }
};

Calculator.prototype.sub = function(number) {
    if (typeof(number)=="number") {
        if(this.value == 0 && this.firstNumber) {
            this.value = number;
        }  else {
        this.value -= number;
    } this.firstNumber = false;
    } 
    else {
        alert("Argument must be a number");
    }
};
Calculator.prototype.multiply = function(number) {
    if (typeof(number)=="number") {
        if(this.value == 0 && this.firstNumber) {
            this.value = number;
        }  else {
        this.value *= number;
    } this.firstNumber = false;
    }
    else {
        alert("Argument must be a number");
    }
};
Calculator.prototype.divide = function(number) {
    if (typeof(number)=="number") {
        if(number == 0) {
            alert("Error!");
        } else
        if(this.value == 0 && this.firstNumber) {
            this.value = number;
        }  else {
        this.value /= number;
    } this.firstNumber = false;
    }
    else {
        alert("Argument must be a number");
    }
};

//     function division(number1, number2){
//     let result;
//     if (typeof (number1) == "number" || typeof (number2) === 0) {
//      result = "Error!";
//     alert("Cannot divide by 0 here!");
//     } else {
//      return number1 + number2;
//     }
//     return result;
// };
