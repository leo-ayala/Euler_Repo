// If we list all the natural numbers below 10 that 
// are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// ------------------------------------------------------- //

// list out numbers below 10
//check if multiple of 3 and 5
//add together
let arr = []
const multiSum = num => {
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 | i % 5 === 0) {
            arr.push(i)
        }   
    }
    console.log(arr)
    var sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum
};

console.log(multiSum(1000));// => 23