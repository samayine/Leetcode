/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let lastIndex = -1;
    let maxDist = 0;
    let index = 0;

    while (n > 0) {
        if ((n & 1) === 1) {
            if (lastIndex !== -1) {
                maxDist = Math.max(maxDist, index - lastIndex);
            }
            lastIndex = index;
        }

        n >>= 1;
        index++;
    }

    return maxDist;
};