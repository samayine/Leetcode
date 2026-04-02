/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {
    const m = coins.length;
    const n = coins[0].length;
    
    const memo = Array(m).fill().map(
        () => Array(n).fill().map(
            () => [-Infinity, -Infinity, -Infinity]
        )
    );
    
    const dfs = (i, j, k) => {
        // Out of bounds - invalid path
        if (i >= m || j >= n) return -Infinity;
        
        if (i === m-1 && j === n-1) {
            const val = coins[i][j];
            if (val >= 0) return val;
            return k < 2 ? Math.max(val, 0) : val;
        }
        
        // Return cached result
        if (memo[i][j][k] !== -Infinity) return memo[i][j][k];
        
        const currentVal = coins[i][j];
        let result = -Infinity;
        
        result = Math.max(
            result,
            currentVal + Math.max(dfs(i+1, j, k), dfs(i, j+1, k))
        );
        
        // Option 2: Neutralize (only if cell is negative and we have uses left)
        if (currentVal < 0 && k < 2) {
            result = Math.max(
                result,
                0 + Math.max(dfs(i+1, j, k+1), dfs(i, j+1, k+1))
            );
        }
        
        memo[i][j][k] = result;
        return result;
    };
    
    return dfs(0, 0, 0);
};