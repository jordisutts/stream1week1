function whatCanIdrink(age) {
    if (age == 0) {
        return "Sorry. I can't tell you what drink because the age is incorrect.";
    } else if (age <= 14) {
        return "Drink Toddy!";
    }else if (age <= 18) {
        return "Drink coke!";
    }else if (age <= 21) {
        return "Have a beer!";
    }else if (age < 130) {
        return "Have a whiskey!";
    }else {
        return "Sorry, I don't know your age so you cant be served!";
    }
}
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
        return "FizzBuzzPop";
    }else if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }else if (number % 3 === 0 && number % 7 === 0) {
        return "FizzPop";
    }else if (number % 5 === 0 && number % 7 === 0) {
        return "BuzzPop";
    }else if (number % 3 == 0) {
        return "Fizz";
    }else if (number % 5 == 0) {
        return "Buzz";
    }else if (number % 7 == 0) {
        return "Pop";
    }else if (typeof(number) != "number") {
        return "Error!";
    }else {
        return number;
    }
}













// let whatCanIdrink = function(age) {
//     this.value=0;
//     this.firstNumber=true;
// };
// whatCanIdrink = function age (age){
//     let result;
//     if (typeof(number) == "number") {
//         return result;
//     }
// };
// whatCanIdrink = function Toddy (age){
//     let result;
//     if(typeof(number) <= 14) {
//         alert("Drink Toddy");
//     }else {
//         return result;
//     }
// };    
// whatCanIdrink = function Coke (age){
//     let result;
//     if(typeof(age) >= 15  <=18) {
//         alert("you should be drinking coke!");
//     } else {
//         return result;
//     }
// };