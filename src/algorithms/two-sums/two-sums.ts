/**
 * Two Sums
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * @param nums 
 * @param target 
 * @returns 
 */
export default function twoSums(nums: number[], target: number): number[] {
  return nums.reduce(
    (acc, curr, index, array) => {
      const result = array.findIndex(
        (num, indexFind) => indexFind !== index && num + curr === target
      );
      if (result !== -1) {
        acc = [index, result];
      }
      return acc;
    },
    [0, 0]
  );
}
// let nums = [2, 7, 11, 15]; target = 9
export function optimizedTwoSum(nums: number[], target: number): number[] {
  const m = new Map();
  for (let i = 0; i < nums.length; ++i) {
    let comp = target - nums[i]; // 7, 2
    if (m.has(comp)) {
      return [m.get(comp), i]; // 0, 1
    }
    m.set(nums[i], i); // 2: 0
  }
  return [];
}

/**
 * Optimized Two Sum - Alternative
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param nums number list
 * @param target target number
 * @returns matched indexes
 */
export function optimizedAltTwoSum(nums: number[], target: number): number[] {
  const m = {} as Record<number, number>;
  
  for (let i = 0; i < nums.length; ++i) {
    let comp = target - nums[i];
    if (comp in m) {
      return [m[comp], i];
    }
    m[nums[i]] = i;
  }
  return [];
}