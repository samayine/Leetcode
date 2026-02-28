/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    const MOD = 1000000007n;
    let result = 0n;

    for (let i = 1; i <= BigInt(n); i++) {
        let bitLength = i.toString(2).length;

        result = ((result << BigInt(bitLength)) + BigInt(i)) % MOD;
    }

    return Number(result);
};