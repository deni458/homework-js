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