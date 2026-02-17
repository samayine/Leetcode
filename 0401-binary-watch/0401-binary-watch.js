/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const result = [];

    for(let h = 0; h<12;h++){
        for(let m = 0; m<60; m++){
            let bits =
                countBits(h) + countBits(m);

            if (bits === turnedOn) {
                result.push(
                    h + ":" + (m < 10 ? "0" + m : m)
                );
            }
        }
    }

    return result;
};

function countBits(num) {
    let count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
};