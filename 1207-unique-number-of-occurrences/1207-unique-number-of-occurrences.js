/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   const freq = new Map();

   for(let n of arr){
    freq.set(n, (freq.get(n) || 0) + 1);
    
   }

   const seen = new Set();
   
   for(let count of freq.values()){
    if(seen.has(count)) return false
    seen.add(count);
   }
   return true;
  
};