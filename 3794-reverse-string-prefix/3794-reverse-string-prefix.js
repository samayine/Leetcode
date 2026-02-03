/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    const sl = s.slice(0, k);
    const reversed = [...sl].reverse().join('');
    const remaining = s.slice(k);
    const ans = reversed + remaining;
    return ans;
};