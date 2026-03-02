/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    let i = 0;

    while(i < nums.length){
        let start = nums[i];
        let j = i;

        while(j + 1 < nums.length && nums[j+1] === nums[j] + 1){
            j++;
        }

        const end = nums[j];

        if(start === end){
            res.push(start.toString())
        }else{
            res.push(start.toString() + '->' + end.toString())
        }
        i = j+1;
    }
    return res;
};