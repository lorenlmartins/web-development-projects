/*
    The BMI – Body Mass Index (IMC) is a criterion of the World Health Organization to give an indication about the weight condition of an adult person. 

    BMI formula:
    BMI = weight / (height * height)

    Create an algorithm that, given the weight and height of an adult, shows their condition according to the table below.

    BMI in adults Condition:
    - Below 18.5 Underweight;
    - Between 18.5 and 25 Normal weight;
    - Between 25 and 30 Overweight;
    - Between 30 and 40 Obese;
    - Above 40 Severe obesity;
*/

function calculateBmi(weight, height) {
    return weight / Math.pow(height, 2);
}

function classifyBmi(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else if (bmi >= 30 && bmi < 40) {
        return 'Obese';
    } else {
        return 'Severe obesity';
    }
}

// Main
(function () {
    const weight = 75;
    const height = 1.75;
    
    const bmi = calculateBmi(weight, height);
    console.log(classifyBmi(bmi));
})();