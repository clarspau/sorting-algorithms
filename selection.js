function selectionSort(arr) {
     for (let i = 0; i < arr.length; i++) {
          // Assume the current index holds the minimum value
          let minIndex = i;

          // Iterate through the rest of the array to find the minimum value
          for (let j = i + 1; j < arr.length; j++) {
               // If a smaller value is found, update minIndex
               if (arr[j] < arr[minIndex]) {
                    minIndex = j;
               }
          }

          // If minIndex is not the same as the initial assumed minimum index (i),
          // swap the elements to place the minimum value at index i
          if (minIndex !== i) {
               [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
          }
     }

     return arr;
}

module.exports = selectionSort;