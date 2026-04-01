/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    const freq1 = new Map();
    const freq2 = new Map();
    
    for (const char of word1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }
    
    for (const char of word2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }
    
    // Check if same set of characters
    const chars1 = new Set(freq1.keys());
    const chars2 = new Set(freq2.keys());
    
    if (chars1.size !== chars2.size) return false;
    
    for (const char of chars1) {
        if (!chars2.has(char)) return false;
    }
    
    const counts1 = Array.from(freq1.values()).sort((a, b) => a - b);
    const counts2 = Array.from(freq2.values()).sort((a, b) => a - b);
    
    for (let i = 0; i < counts1.length; i++) {
        if (counts1[i] !== counts2[i]) return false;
    }
    
    return true;
};