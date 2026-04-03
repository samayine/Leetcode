/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const chars = s.split('');

    for(let i=1; i<chars.length; i += 2){
        const shiftAmount = parseInt(chars[i]);
        const prevCharCode = chars[i-1].charCodeAt(0);

        chars[i] = String.fromCharCode(shiftAmount + prevCharCode);
    }
    return chars.join('');
};