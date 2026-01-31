/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    if(nums.length == 0) return [];
    nums.sort((a,b) => a-b);
    const missing = [];

    for(let i=0; i<nums.length - 1; i++){
        let curr = nums[i];
        let next = nums[i+1];

        if((next - curr) > 1){
            for(let val = curr + 1; val < next; val++){
                missing.push(val);
            }
        }
        }
     return missing;

};