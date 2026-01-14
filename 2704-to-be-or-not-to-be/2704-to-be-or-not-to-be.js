/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(value) {
    let obj = {
        toBe(val){
        if(val === value){
            return true;
        }else{
            throw new Error('Not Equal');
        }
    },
    notToBe(val){
        if(val !== value){
            return true;
        }else{
            throw new Error('Equal')
        }
    }
    }
    return obj;
};
expect(5).toBe(5);
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */