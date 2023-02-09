// Solution to exercise 1 starts here
let char = 'L';

if (typeof char === 'string') {
    if (char === 'a' || char === "A" || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
        console.log('Vowel');
    } else {
        console.log('Consonant');
    }
} else {
    console.log('Invalid character')
}
// Solution to exercise 1 ends here

// Solution to exercise 2 starts here

let a = 5;
let b = 7;
let c = 10;

if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    if (a + b > c && a + c > b && b + c > a) {
        console.log('This is a possible triangle');
    } else {
        console.log('This is NOT a possible triangle');
    }
} else {
    console.log('Invalid variables');
}

// Solution to exercise 2 ends here

// Solution to exercise 3 starts here

let points = 94;

switch (typeof points === 'number') {
    case (points >= 0 && points < 50):
        console.log('Not enough points');
        break;
    case (points >= 50 && points < 60):
        console.log(6);
        break;
    case (points >= 60 && points < 70):
        console.log(7);
        break;
    case (points >= 70 && points < 80):
        console.log(8);
        break;
    case (points >= 80 && points < 90):
        console.log(9);
        break;
    case (points >= 90 && points <= 100):
        console.log(10);
        break;
    default:
        console.log('Invalid points');
}

  // Solution to exercise 3 ends here
  
// Solution to exercise 4 starts here

let cha = 'n';

switch (typeof cha === 'string') {
    case false:
        console.log('Invalid character');
        break;
    case true:
        switch (cha) {
            case cha = 'c':
            case cha = 'C':
            case cha = 'k':
            case cha = 'K':
                console.log('Circle');
                break;
            case cha = 'p':
            case cha = 'P':
            case cha = 'm':
            case cha = 'M':
            case cha = 'n':
            case cha = 'N':
                console.log('Square');
                break;
            default:
                console.log('Triangle');
        }
}

// Solution to exercise 4 ends here

// Solution to exercise 5 starts here

let d = 10;
let e = 2;
let operator = '/';

switch (typeof d === 'number' && typeof e === 'number') {
    case true:
        switch (operator) {
            case '+':
                console.log(d + e);
                break;
            case '-':
                console.log(d - e);
                break;
            case '*':
                console.log(d * e);
                break;
            case '/':
                switch (e === 0) {
                    case true:
                        console.log('Dividing by 0');
                        break;
                    case false:
                        console.log(d / e);
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