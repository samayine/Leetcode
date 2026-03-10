/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length) return false;

    const magCount = new Map();

    for(let char of magazine){
        magCount.set(char, (magCount.get(char) || 0) + 1);
    }

    for(let char of ransomNote){
        const count = magCount.get(char) || 0;
        if(count === 0) return false;

        magCount.set(char, count - 1);
    }
    return true;
};