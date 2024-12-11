function findRotationCount(arr, low = 0, high = arr.length - 1) {
    // If the array is not rotated at all
    if (high < low) return 0;
  
    // If there is only one element left
    if (high === low) return low;
  
    // Calculate the middle index
    let mid = Math.floor((low + high) / 2);
  
    // Check if the element at (mid+1) is the minimum element
    // Consider the cases like [3, 4, 5, 1, 2]
    if (mid < high && arr[mid + 1] < arr[mid]) {
      return mid + 1;
    }
  
    // Check if the mid itself is the minimum element
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }
  
    // Decide whether to search in the left half or the right half
    if (arr[high] > arr[mid]) {
      return findRotationCount(arr, low, mid - 1); // Search in the left half
    }
  
    return findRotationCount(arr, mid + 1, high); // Search in the right half
  }
  
  module.exports = findRotationCount;
  