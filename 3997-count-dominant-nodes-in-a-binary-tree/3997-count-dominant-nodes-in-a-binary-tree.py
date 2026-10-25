# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countDominantNodes(self, root: TreeNode | None) -> int:
        self.ans = 0
        
        def dfs(node: TreeNode | None) -> float:
            if not node:
                return float('-inf')
            
            left_max = dfs(node.left)
            right_max = dfs(node.right)
            
            subtree_max = max(left_max, right_max, node.val)
            
            if subtree_max == node.val:
                self.ans += 1
            
            return subtree_max
        
        dfs(root)
        return self.ans