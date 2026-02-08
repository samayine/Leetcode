/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    const freq1 = new Map();
    const freq2 = new Map();

    for(let val of s){
        freq1.set(val, (freq1.get(val) || 0) + 1);
    }

    for(let val of t){
        freq2.set(val, (freq2.get(val) || 0) + 1);
    }

    if(freq1.size !== freq2.size) return false;
    
    for(let [char, count] of freq1){
        if(freq2.get(char) !== count){
            return false;
        }
    }
    return true;
};