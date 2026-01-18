//Switch Case in JavaScript
/*
In JavaScript, the switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if...else if...else statements when you have a single variable or expression that you want to compare against multiple possible values.

The switch statement evaluates an expression and matches its value against a series of case clauses. When a match is found, the corresponding block of code is executed. If no match is found, the optional default clause can be executed.
*/
// Syntax:
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const Month = 4;
switch (Month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("You entered Wrong Number...")
        break;
}