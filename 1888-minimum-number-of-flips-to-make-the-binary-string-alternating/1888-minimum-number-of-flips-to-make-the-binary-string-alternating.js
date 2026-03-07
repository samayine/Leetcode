/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    const n = s.length;
    const doubled = s + s;
    
    // Build target patterns of length 2n
    let pattern1 = ''; // starts with '0'
    let pattern2 = ''; // starts with '1'
    
    for (let i = 0; i < 2 * n; i++) {
        pattern1 += i % 2 === 0 ? '0' : '1';
        pattern2 += i % 2 === 0 ? '1' : '0';
    }
    
    let mismatches1 = 0; 
    let mismatches2 = 0; 
    
    for (let i = 0; i < n; i++) {
        if (doubled[i] !== pattern1[i]) mismatches1++;
        if (doubled[i] !== pattern2[i]) mismatches2++;
    }
    
    let minFlips = Math.min(mismatches1, mismatches2);
    
    for (let i = 1; i < n; i++) {
        // Remove leftmost character (at position i-1)
        if (doubled[i-1] !== pattern1[i-1]) mismatches1--;
        if (doubled[i-1] !== pattern2[i-1]) mismatches2--;
        
        // Add new rightmost character (at position i+n-1)
        const right = i + n - 1;
        if (doubled[right] !== pattern1[right]) mismatches1++;
        if (doubled[right] !== pattern2[right]) mismatches2++;
        
        minFlips = Math.min(minFlips, mismatches1, mismatches2);
    }
    
    return minFlips;
    
};