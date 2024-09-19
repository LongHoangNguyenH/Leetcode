/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if(hashMap.has(diff)){
        return  [hashMap.get(diff),i];
    }
    hashMap.set(nums[i],i);
  }
  return [];
};
