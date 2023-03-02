/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/


function bmiCalculator(weight, height) {

    let bmi = Math.round(weight/(Math.pow(height, 2)));
    if (bmi < 18.5) {
        return("Your BMI is " + bmi +", so you are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return("Your BMI is " + bmi +", so you have a normal weight.");
    }
    
    return("Your BMI is " + bmi +", so you are overweight.");
}

console.log(bmiCalculator(190, 1.8));