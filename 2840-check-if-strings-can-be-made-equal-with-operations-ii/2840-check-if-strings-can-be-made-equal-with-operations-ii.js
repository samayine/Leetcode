/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    const n = s1.length;
    
    const evenFreq1 = new Array(26).fill(0);
    const oddFreq1 = new Array(26).fill(0);
    const evenFreq2 = new Array(26).fill(0);
    const oddFreq2 = new Array(26).fill(0);
    
    for (let i = 0; i < n; i++) {
        const idx1 = s1.charCodeAt(i) - 97;
        const idx2 = s2.charCodeAt(i) - 97;
        
        if (i % 2 === 0) {
            evenFreq1[idx1]++;
            evenFreq2[idx2]++;
        } else {
            oddFreq1[idx1]++;
            oddFreq2[idx2]++;
        }
    }
    
    // Compare frequencies
    for (let i = 0; i < 26; i++) {
        if (evenFreq1[i] !== evenFreq2[i] || oddFreq1[i] !== oddFreq2[i]) {
            return false;
        }
    }
    
    return true;
};