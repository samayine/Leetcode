/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function (root) {
    const MOD = 1e9 + 7;
    let totalSum = 0;
    let maxProd = 0;

    function getTotalSum(node) {
        if (!node) return 0;
        return node.val + getTotalSum(node.left) + getTotalSum(node.right);
    }

    totalSum = getTotalSum(root);

    function dfs(node) {
        if (!node) return 0;

        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);

        const subSum = node.val + leftSum + rightSum;

        const product = subSum * (totalSum - subSum);
        maxProd = Math.max(maxProd, product);

        return subSum;
    }

    dfs(root);

    return maxProd % MOD;
};
