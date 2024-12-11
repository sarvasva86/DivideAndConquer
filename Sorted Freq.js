function sortedFrequency(arr, num) {
    // Find the first occurrence of the number in the array
    let firstIdx = findFirst(arr, num);
  
    // If the number is not found, return -1
    if (firstIdx == -1) return firstIdx;
  
    // Find the last occurrence of the number in the array
    let lastIdx = findLast(arr, num);
  
    // Return the count of occurrences by subtracting the indices and adding 1
    return lastIdx - firstIdx + 1;
  }
  
  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    // Base case: ensure the search bounds are valid
    if (high >= low) {
      // Calculate the middle index of the current search bounds
      let mid = Math.floor((low + high) / 2);
  
      // Check if this is the first occurrence of the number
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      }
      // If the number is greater than the middle element, search in the right half
      else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, high);
      }
      // Otherwise, search in the left half
      else {
        return findFirst(arr, num, low, mid - 1);
      }
    }
    // Return -1 if the number is not found
    return -1;
  }
  
  function findLast(arr, num, low = 0, high = arr.length - 1) {
    // Base case: ensure the search bounds are valid
    if (high >= low) {
      // Calculate the middle index of the current search bounds
      let mid = Math.floor((low + high) / 2);
  
      // Check if this is the last occurrence of the number
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      }
      // If the number is less than the middle element, search in the left half
      else if (num < arr[mid]) {
        return findLast(arr, num, low, mid - 1);
      }
      // Otherwise, search in the right half
      else {
        return findLast(arr, num, mid + 1, high);
      }
    }
    // Return -1 if the number is not found
    return -1;
  }
  
  module.exports = sortedFrequency;
  