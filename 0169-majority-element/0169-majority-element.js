/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const freq = new Map();
    let base = Math.floor(nums.length/2);

    for(let num of nums){
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    for(let [num, count] of freq){
        if(count > base){
            return num;
        }
    }
};