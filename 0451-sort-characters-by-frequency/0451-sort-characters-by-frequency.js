/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freqMap = new Map();

    for(let char of s){
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const charFreqArray = Array.from(freqMap.entries());
    
    charFreqArray.sort((a, b) => b[1] - a[1]);
    
    let result = '';
    
    for (let [char, freq] of charFreqArray) {
        result += char.repeat(freq);
    }
    
    return result;
};