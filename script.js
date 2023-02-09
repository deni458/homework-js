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