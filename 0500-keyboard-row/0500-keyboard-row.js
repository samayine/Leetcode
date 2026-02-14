/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const r1 = new Set("qwertyuiop");
    const r2 = new Set("asdfghjkl");
    const r3 = new Set("zxcvbnm");

    let result = [];

    for (let word of words) {
        let lower = word.toLowerCase();

        let row;
        if (r1.has(lower[0])) row = r1;
        else if (r2.has(lower[0])) row = r2;
        else row = r3;

        let valid = true;
        for (let ch of lower) {
            if (!row.has(ch)) {
                valid = false;
                break;
            }
        }

        if (valid) result.push(word);
    }

    return result;
};
