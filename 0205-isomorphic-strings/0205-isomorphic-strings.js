/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    const mapST = new Map();
    const mapTS = new Map();

    for(let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if(mapST.has(charS)) {
            if(mapST.get(charS) !== charT) return false;
        } else {
            if(mapTS.has(charT)) return false;
            mapST.set(charS, charT);
            mapTS.set(charT, charS);
        }
    }

    return true;
};