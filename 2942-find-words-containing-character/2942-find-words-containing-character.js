/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let val = [];
    for(let i=0; i< words.length;i++){
        if(words[i].includes(x)){
            val.push(i);
        }
    }
    return val;
};