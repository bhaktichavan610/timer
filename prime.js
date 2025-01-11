var num = 11;
var isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`   ${num}   `); 
}
