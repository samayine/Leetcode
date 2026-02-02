/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const st = s.split(' ');
    for(let i=0; i<st.length; i++){
        st[i] = st[i].split('').reverse().join('');
    }
    return st.join(' ');
};