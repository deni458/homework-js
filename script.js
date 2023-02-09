// Solution to exercise 4 starts here

let a = 'n';

switch (typeof a === 'string') {
    case false:
        console.log('Invalid character');
        break;
    case true:
        switch (a) {
            case a = 'c':
            case a = 'C':
            case a = 'k':
            case a = 'K':
                console.log('Circle');
                break;
            case a = 'p':
            case a = 'P':
            case a = 'm':
            case a = 'M':
            case a = 'n':
            case a = 'N':
                console.log('Square');
                break;
            default:
                console.log('Triangle');
        }
}

// Solution to exercise 4 ends here

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
