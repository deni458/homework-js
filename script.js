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