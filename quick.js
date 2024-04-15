function pivot(arr, start = 0, end = arr.length - 1) {
     const swap = (arr, idx1, idx2) => {
          // Swap the elements in the array
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
     };

     let pivot = arr[start];
     let swapIdx = start;

     // Loop through the array and swap the pivot with the first element that is less than the pivot
     for (let i = start + 1; i <= end; i++) {
          // If the pivot is greater than the current element, increment the swapIdx and swap the current element with the element at the swapIdx
          if (pivot > arr[i]) {
               swapIdx++;
               swap(arr, swapIdx, i);
          }
     }

     // Swap the pivot with the element at the swapIdx
     swap(arr, start, swapIdx);
     return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
     // Base case: If the left pointer is less than the right pointer
     if (left < right) {
          // Get the pivot index
          let pivotIndex = pivot(arr, left, right);
          // Recursively call the quickSort function on the left and right side of the pivot
          quickSort(arr, left, pivotIndex - 1);
          quickSort(arr, pivotIndex + 1, right);
     }
     return arr;
}

module.exports = { pivot, quickSort };