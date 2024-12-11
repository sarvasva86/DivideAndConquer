function findFloor(arr, num, low = 0, high = arr.length - 1) {
    // If the range is invalid, return -1
    if (low > high) return -1;
  
    // If the number is greater than or equal to the last element, return the last element
    if (num >= arr[high]) return arr[high];
  
    // Calculate the middle index
    let mid = Math.floor((low + high) / 2);
  
    // If the middle element matches the number, return it
    if (arr[mid] === num) return arr[mid];
  
    // Check if the floor lies between arr[mid-1] and arr[mid]
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }
  
    // If the number is smaller than arr[mid], search in the left half
    if (num < arr[mid]) {
      return findFloor(arr, num, low, mid - 1);
    }
  
    // Otherwise, search in the right half
    return findFloor(arr, num, mid + 1, high);
  }
  
  module.exports = findFloor;
  