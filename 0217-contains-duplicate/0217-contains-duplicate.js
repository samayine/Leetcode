/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let visited = new Set();

    for(let num of nums){
        if(visited.has(num)){
            return true;
        }
        visited.add(num);
    }
    return false;
};