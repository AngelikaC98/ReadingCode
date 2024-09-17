//try to change the value of "number" by erasing 10 and writing a different number and observe the different output

// This code creates a variable number with the value 10. It then checks if the number is greater than 5. If so, 
//the text “Number is greater than 5” will appear in the HTML element with the ID "message". 
// Otherwise, if the number is equal to or less than 5, the text “Number is 5 or less” will be displayed.
let number = 10;
if (number > 5) {
    document.getElementById("message").innerHTML = "Number is greater than 5";
} else {
    document.getElementById("message").innerHTML = "Number is 5 or less";
}
