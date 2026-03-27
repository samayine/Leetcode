/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    const rows = mat.length;
    const cols = mat[0].length;
    
    k = k % cols;
    if (k === 0) return true;
    
    for (let i = 0; i < rows; i++) {
        const isEvenRow = i % 2 === 0;
        
        for (let j = 0; j < cols; j++) {
            let originalIndex;
            if (isEvenRow) {
                originalIndex = (j + k) % cols;
            } else {
                originalIndex = (j - k + cols) % cols;
            }
            
            if (mat[i][j] !== mat[i][originalIndex]) {
                return false;
            }
        }
    }
    
    return true;
};