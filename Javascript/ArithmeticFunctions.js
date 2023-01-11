/*
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, 
    times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function 
    represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

*/

console.log(seven(times(five())));

function zero(op) { return setUp(0, op); }
function one(op) { return setUp(1, op); }
function two(op) { return setUp(2, op); }
function three(op) { return setUp(3, op); }
function four(op) { return setUp(4, op); }
function five(op) { return setUp(5, op); }
function six(op) { return setUp(6, op); }
function seven(op) { return setUp(7, op); }
function eight(op) { return setUp(8, op); }
function nine(op) { return setUp(9, op); }

function plus(y) { return ['plus', y]; }
function minus(y) { return ['minus', y]; }
function times(y) { return ['times', y]; }
function dividedBy(y) { return ['divide', y]; }

function setUp(x, op){
    if (op == undefined) { return x; }
    return calculate(x, op[0], op[1])
}

function calculate(x, op, y) {
    let result = 0;
    switch (op) {
        case 'plus':
            result = x + y;
            break;
        case 'minus':
            result = x - y;
            break;
        case 'times':
            result = x * y;
            break;
        case 'divide':
            result = Math.floor(x / y);
            break;
    }
    return result;
}
