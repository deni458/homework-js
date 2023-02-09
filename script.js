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