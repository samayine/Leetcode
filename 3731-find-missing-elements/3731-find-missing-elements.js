/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    if(nums.length == 0) return [];

    const set = new Set(nums);
    
    const missing = [];

    const min = Math.min(...nums);
    const max = Math.max(...nums);

    for(let val = min+1; val<max;val++){
        if(!set.has(val)){
            missing.push(val);
        }
    }
    return missing;

};