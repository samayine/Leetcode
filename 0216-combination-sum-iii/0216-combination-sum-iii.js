/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    
    const minSum = (k * (k + 1)) / 2;
    const maxSum = (9 * 10 / 2) - ((9 - k) * (10 - k) / 2);
    
    if (n < minSum || n > maxSum) return result;
    
    function backtrack(start, current, sum) {
        if (current.length === k) {
            if (sum === n) {
                result.push([...current]);
            }
            return;
        }
        
        if (sum > n) return;
        
        for (let i = start; i <= 9; i++) {
            if (sum + i > n) break;
            
            current.push(i);
            
            backtrack(i + 1, current, sum + i);
            
            current.pop();
        }
    }
    
    backtrack(1, [], 0);
    return result;
};