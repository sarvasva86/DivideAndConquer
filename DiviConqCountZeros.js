function countZeroes(arr) {
    // Find the index of the first zero using binary search
    let firstZero = findFirst(arr);
    
    // If no zero is found, return 0
    if (firstZero === -1) return 0;
  
    // Return the number of zeros (total length minus the index of the first zero)
    return arr.length - firstZero;
  }
  
  function findFirst(arr, low = 0, high = arr.length - 1) {
    // Perform binary search to find the first occurrence of 0
    if (high >= low) {
      let mid = low + Math.floor((high - low) / 2);
      
      // Check if mid is the first occurrence of 0
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      }
      
      // If the element at mid is 1, search the right half
      if (arr[mid] === 1) {
        return findFirst(arr, mid + 1, high);
      }
      
      // Otherwise, search the left half
      return findFirst(arr, low, mid - 1);
    }
  
    // Return -1 if no zero is found
    return -1;
  }
  
  module.exports = countZeroes;
  