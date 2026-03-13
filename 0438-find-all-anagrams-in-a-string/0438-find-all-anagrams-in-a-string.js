/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    
    if (p.length > s.length) return result;
    
    const pCount = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        windowCount[s.charCodeAt(i) - 97]++;
    }
    
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (pCount[i] === windowCount[i]) {
            matches++;
        }
    }
    
    // Check first window
    if (matches === 26) {
        result.push(0);
    }
    
    // Slide the window
    for (let i = p.length; i < s.length; i++) {
        const rightIndex = s.charCodeAt(i) - 97;
        windowCount[rightIndex]++;
        
        if (windowCount[rightIndex] === pCount[rightIndex]) {
            matches++;
        } else if (windowCount[rightIndex] - 1 === pCount[rightIndex]) {
            matches--;
        }
        
        const leftIndex = s.charCodeAt(i - p.length) - 97;
        windowCount[leftIndex]--;
        
        if (windowCount[leftIndex] === pCount[leftIndex]) {
            matches++;
        } else if (windowCount[leftIndex] + 1 === pCount[leftIndex]) {
            matches--;
        }
        
        if (matches === 26) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
};