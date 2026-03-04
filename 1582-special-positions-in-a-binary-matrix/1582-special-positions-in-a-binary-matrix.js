/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let m = mat.length;
  let n = mat[0].length;

  let rowCount = new Array(m).fill(0);
  let columnCount = new Array(n).fill(0);

  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
        if(mat[i][j] === 1){
            rowCount[i]++;
            columnCount[j]++;
        }
    }
  }

  let special = 0;
  
  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
        if(mat[i][j] === 1 && rowCount[i] === 1 && columnCount[j] === 1){
            special++;
        }
    }
  }
  return special;
};