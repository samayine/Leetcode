/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
     const robRange = (start, end) => {
        let prev2 = 0, prev1 = 0;
        for (let i = start; i <= end; i++) {
            const current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    };
    
    const case1 = robRange(0, nums.length - 2);
    const case2 = robRange(1, nums.length - 1);
    
    return Math.max(case1, case2)
};