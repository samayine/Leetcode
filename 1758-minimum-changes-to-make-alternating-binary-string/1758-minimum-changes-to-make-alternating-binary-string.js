/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let patternA = 0;

    for(let i=0; i<s.length; i++){
        
            if(i % 2 === 0){
                if(s[i] !== '0') patternA++;
            }
            else{
                if(s[i] !== '1') patternA++;
            }

    } 
    return Math.min(patternA, s.length - patternA);
};