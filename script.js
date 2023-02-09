// Solution to exercise 5 starts here

let a = 10;
let b = 2;
let operator = '/';

switch (typeof a === 'number' && typeof b === 'number') {
    case true:
        switch (operator) {
            case '+':
                console.log(a + b);
                break;
            case '-':
                console.log(a - b);
                break;
            case '*':
                console.log(a * b);
                break;
            case '/':
                switch (b === 0) {
                    case true:
                        console.log('Dividing by 0');
                        break;
                    case false:
                        console.log(a / b);
                }
                break;
            default:
                console.log('Invalid operator');
        }
        break;
    case false:
        console.log('Invalid numbers');
}




// Solution to exercise 5 ends here