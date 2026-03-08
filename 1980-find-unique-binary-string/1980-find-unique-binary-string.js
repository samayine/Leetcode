/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    const set = new Set(nums);

    function backTrack(cur){
        if(cur.length === n){
            return set.has(cur)? null: cur;
        }

        let res = backTrack(cur + '0');
        if(res) return res;

        return backTrack(cur + '1');
    }

    return backTrack("");
};