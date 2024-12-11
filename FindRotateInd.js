function findRotatedIndex(array, num) {
    // Find the pivot point where the array is rotated
    var pivot = findPivot(array);
  
    // Determine which part of the array to search in
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      return binarySearch(array, num, 0, pivot - 1);
    } else {
      return binarySearch(array, num, pivot, array.length - 1);
    }
  }
  
  function binarySearch(array, num, start, end) {
    // Handle edge cases for empty array or out-of-bound values
    if (array.length === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;
  
    // Perform binary search within the specified bounds
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] === num) {
        return mid; // Number found
      } else if (num < array[mid]) {
        end = mid - 1; // Search in the left half
      } else {
        start = mid + 1; // Search in the right half
      }
    }
    return -1; // Number not found
  }
  
  function findPivot(arr) {
    // If the array is not rotated or has only one element
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  
    var start = 0;
    var end = arr.length - 1;
  
    // Perform binary search to find the pivot point
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
  
      // Check if mid is the pivot point
      if (arr[mid] > arr[mid + 1]) return mid + 1;
  
      // Determine which half to search next
      else if (arr[start] <= arr[mid]) {
        start = mid + 1; // Search in the right half
      } else {
        end = mid - 1; // Search in the left half
      }
    }
  }
  
  module.exports = findRotatedIndex;
  