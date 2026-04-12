/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const st1 = word1.join('');
    const st2 = word2.join('');

    if(st1 === st2) return true;
    return false;
};