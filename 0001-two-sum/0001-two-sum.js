/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let [i, el] of nums.entries()){
        for(let j=i+1; j<nums.length;j++){
            if(target === nums[j] + el){
                return [i, j]
            }
        }
    }
    return [];
};