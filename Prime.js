// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
// ----------------------------------------------- //

//Create function to bring in prime number

function prime_factors(num) {
    function is_prime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++)
        {
          if (num % i === 0) return false;
        }
        return true;
      }
      const result = [];
      for (let i = 2; i <= num; i++)
      {
        while (is_prime(i) && num % i === 0) 
        {
            // console.log(i)
          if (!result.includes(i)) result.push(i);
          num /= i;
        }
      }
    //   console.log(result)
      return result[result.length - 1];
    }
    // console.log(prime_factors(100));
    console.log(prime_factors(600851475143));
