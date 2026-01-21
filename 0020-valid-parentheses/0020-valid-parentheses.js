/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for(let char of s){
        //for opening bracket
        if(bracketMap[char]){
            stack.push(char)
        }
        //for closing bracket
        else{
        if(stack.length === 0) return false;
        
        const lastOpen = stack.pop();
        
        if(bracketMap[lastOpen] !== char){
        return false
        }
        }

        
    }
    return stack.length === 0;
};