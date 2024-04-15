function merge(arr1, arr2) {
     let results = [];
     let i = 0;
     let j = 0;

     while (i < arr1.length && j < arr2.length) {
          // If the value in the first array is smaller than the value in the second array, push the value in the first array into the results array and move on to the next value in the first array
          if (arr2[j] > arr1[i]) {
               results.push(arr1[i]);
               i++;
          }
          else {
               results.push(arr2[j]);
               j++;
          }
     }

     // If there are any remaining values in the first or second array, push them into the results array
     while (i < arr1.length) {
          results.push(arr1[i]);
          i++;
     }

     // If there are any remaining values in the first or second array, push them into the results array
     while (j < arr2.length) {
          results.push(arr2[j]);
          j++;
     }

     return results;
}

function mergeSort(arr) {
     // Base case: if the array has 0 or 1 elements, it is already sorted
     if (arr.length <= 1)
          return arr;

     // Find the middle of the array
     const mid = Math.floor(arr.length / 2);
     // Recursively sort the left and right halves of the array
     const left = mergeSort(arr.slice(0, mid));
     // Recursively sort the left and right halves of the array
     const right = mergeSort(arr.slice(mid));

     return merge(left, right);
}

module.exports = { merge, mergeSort };