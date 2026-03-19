/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    
    function backtrack(start, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }
        
        let prev = -1;
        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];
            
            // Skip duplicates using a variable
            if (num === prev) continue;
            
            if (sum + num > target) break;
            
            current.push(num);
            prev = num;
            backtrack(i + 1, current, sum + num);
            current.pop();
        }
    }
    
    backtrack(0, [], 0);
    return result;
};