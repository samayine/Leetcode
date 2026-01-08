/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const MOD = 1e9 + 7;

    let same = 6; // ABA
    let diff = 6; // ABC

    for (let i = 2; i <= n; i++) {
        const newSame = (same * 3 + diff * 2) % MOD;
        const newDiff = (same * 2 + diff * 2) % MOD;

        same = newSame;
        diff = newDiff;
    }

    return (same + diff) % MOD;
};
