/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        let vowelCount = 0;
        let consonantCount = 0;
        
        for (let j = i; j < s.length; j++) {
            if (vowels.has(s[j])) {
                vowelCount++;
            } else {
                consonantCount++;
            }
            
            // Check if beautiful substring
            if (vowelCount === consonantCount && 
                (vowelCount * consonantCount) % k === 0) {
                count++;
            }
        }
    }
    return count;
};