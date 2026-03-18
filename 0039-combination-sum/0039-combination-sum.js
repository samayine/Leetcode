/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
        const result = [];
    
    function backtrack(start, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }
        
        if (sum > target) return;
        
        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];
            
            current.push(num);
            
            // we can reuse the same number
            backtrack(i, current, sum + num);
            
            current.pop();
        }
    }
    
    backtrack(0, [], 0);
    return result;
};