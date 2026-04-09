/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let ans = new Array(nums.length);

    let totalSum = 0;
    for(let num of nums){
        totalSum += num;
    }

    let leftSum = 0;
    for(let i=0; i<nums.length; i++){
        const rightSum = totalSum - leftSum-nums[i];
        ans[i] = Math.abs(leftSum-rightSum);
        leftSum += nums[i];
    }
    return ans;
};