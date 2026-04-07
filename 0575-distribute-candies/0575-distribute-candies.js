/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const n = candyType.length;
    const maxSheCanEat = n / 2;
    
    const uniqueTypes = new Set(candyType);
    const uniqueCount = uniqueTypes.size;
    
    return Math.min(uniqueCount, maxSheCanEat);
};