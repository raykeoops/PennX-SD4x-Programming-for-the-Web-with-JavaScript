/*
 * Implement all your JavaScript in this file!
 */

var calcFunc = {
    "addButton" : (a, b) => a + b,
    "subtractButton" : (a, b) => a - b,
    "multiplyButton" : (a, b) => a * b,
    "divideButton" : (a, b) => a / b
};

function calculate(stack) {
    return calcFunc[stack[1]](stack[0], stack[2]);
};

var stack = [];
var display = '';
var current = NaN;

$(function() {
    // When clear is pressed:
    $("#clearButton").click(function() {
        stack = {};
        display = '';
        current = NaN;
        $("#display").val(display);
    });
    
    // When a digit is pressed:
    $(".digit").click(function() {
        if (stack.length == 1 || stack.length == 3) {
            display = '';
            stack = [];
            //current = NaN;
        }
        display += $(this).val();
        $("#display").val(Number(display));
        current = Number(display);
    });
    
    // When an operator is pressed:
    $(".operator").click(function() {
        if (stack.length == 3) {
            //current = calculate(stack);
            stack = [Number(display), this.id];
        } else if (stack.length == 2) {
            if (isNaN(current)) {
                stack[1] = this.id;
            } else {
                stack.push(Number(display));
                display = calculate(stack);
                $("#display").val(display);
                stack = [Number(display), this.id];
            }
        } else {
            //console.log(current);
            if (!isNaN(current)) {
                stack = [Number(display), this.id];
            }
        }
        
        current = NaN;
        display = '';
    });
    
    // When equal is pressed:
    $("#equalsButton").click(function() {
        if (stack.length == 3) {
            stack[0] = Number(display);
            display = calculate(stack);
            $("#display").val(display);
        } else if (stack.length == 2) {
            if (isNaN(current)) {
                stack = [stack[0]];
            } else {
                stack.push(Number(display));
                display = calculate(stack);
                $("#display").val(display);
            }
        } else if (stack.length == 0) {
            if (!isNaN(current)) {
                stack = [current];
            }
        }
    });
});







