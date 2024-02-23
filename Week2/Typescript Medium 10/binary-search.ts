export function find(haystack: number[], needle: number): number {
    let left = 0;
    let right = haystack.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = haystack[mid];
  
      if (midValue === needle) {
        return mid;
      } else if (midValue < needle) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    throw new Error('Value not in array'); // Throw error if value not found
  }
  