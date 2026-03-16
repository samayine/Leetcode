/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];

    for(let num of nums){
        const currSize = result.length;

        for(let i=0; i<currSize; i++){
            const newSubset = [...result[i], num];
            result.push(newSubset);
        }
    }
    return result;
};