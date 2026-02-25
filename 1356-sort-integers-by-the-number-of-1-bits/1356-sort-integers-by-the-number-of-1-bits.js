/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a, b) => {
        const bitCountA = a.toString(2).split('0').join('').length;
        const bitCountB = b.toString(2).split('0').join('').length;
        
        return bitCountA - bitCountB || a - b;
    });
};