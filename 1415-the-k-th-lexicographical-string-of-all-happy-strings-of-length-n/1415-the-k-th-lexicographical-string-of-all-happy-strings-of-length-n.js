/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
      const result = [];
    
    function dfs(current) {
        if (current.length === n) {
            result.push(current);
            return;
        }
        
        for (let char of ['a', 'b', 'c']) {
            if (current.length > 0 && current[current.length - 1] === char) {
                continue;
            }
            dfs(current + char);
        }
    }
    
    dfs('');
    
    return result.length >= k ? result[k - 1] : '';
};