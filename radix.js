// Helper function to get the digit at a particular place value
function getDigit(num, place) {
     return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to count the number of digits in a number
function digitCount(num) {
     if (num === 0) return 1;
     return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to find the number of digits in the largest number in an array
function mostDigits(arr) {
     let maxDigits = 0;
     for (let i = 0; i < arr.length; i++) {
          maxDigits = Math.max(maxDigits, digitCount(arr[i]));
     }
     return maxDigits;
}

function radixSort(arr) {
     // Find the number of digits in the largest number in the array
     const maxDigits = mostDigits(arr);

     // Iterate through each digit position, from rightmost to leftmost
     for (let k = 0; k < maxDigits; k++) {
          // Create buckets for each digit (0 to 9)
          const buckets = Array.from({ length: 10 }, () => []);

          // Distribute numbers into buckets based on their kth digit
          for (let i = 0; i < arr.length; i++) {
               const digit = getDigit(arr[i], k);
               buckets[digit].push(arr[i]);
          }

          // Concatenate all buckets into a new array
          arr = [].concat(...buckets);
     }

     return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };