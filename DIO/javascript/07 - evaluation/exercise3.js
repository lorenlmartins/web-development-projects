// 3) Write a program that calculates and prints the salary to be transferred to an employee.
// To perform the calculation, receive the gross salary amount and the additional benefits.
// The salary to be transferred is calculated as follows: 
   
//    gross salary amount - tax percentage according to the salary range + additional benefits

// To calculate the tax percentage, use the following rates:

//     From R$ 0.00 to R$ 1100.00 = 5.00%
//     From R$ 1100.01 to R$ 2500.00 = 10.00%
//     Greater than R$ 2500.00 = 15.00%

//     Example:
//         Input:
//             2000
//             250

//         Output:
//             2050.00

const { gets, print } = require('./auxiliary-functions-ex3');
