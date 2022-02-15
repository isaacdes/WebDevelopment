//Create your function below this line.
function bmiCalculator(weight, height) {
    var bmi = (weight/height**2).toFixed(1);
    return bmi;
    
}
//The first parameter should be the weight and the second should be the height.


//

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

bmi should equal 20 when it's rounded to the nearest whole number.

*/
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
// bmi=25

if( bmi < 18.5){
    console.log( "Your BMI is "+bmi +", so you are underweight." )
}
else if (bmi === 18.5 || bmi<= 24.9){
    console.log( "Your BMI is "+bmi +", so you have a normal weight.")
}
else{
    console.log( "Your BMI is "+bmi +", so you are overweight.")
}


