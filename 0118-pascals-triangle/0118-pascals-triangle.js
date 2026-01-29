/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];

    for (let row = 0; row < numRows; row++) {
        const currentRow = new Array(row + 1);

        for (let col = 0; col < currentRow.length; col++) {
            if (col === 0 || col === currentRow.length - 1) {
                currentRow[col] = 1;
            } else {
                currentRow[col] =
                    result[row - 1][col - 1] +
                    result[row - 1][col];
            }
        }

        result.push(currentRow);
    }

    return result;
};
