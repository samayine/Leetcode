/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ').filter(word => word !== '');

    words.reverse();

    return words.join(' ');
};