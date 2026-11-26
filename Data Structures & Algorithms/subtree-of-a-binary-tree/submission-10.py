# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def isSametree(self, a: Optional[TreeNode], b: Optional[TreeNode]) -> bool:
        if not a and not b:
            return True
        elif not a or not b:
            return False

        if a.val == b.val:
            left = self.isSametree(a.left, b.left)
            right = self.isSametree(a.right, b.right)

            return left and right

        return False

    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root:
            return False

        if self.isSametree(root, subRoot):
            return True

        left = self.isSubtree(root.left, subRoot)
        right = self.isSubtree(root.right, subRoot)

        return left or right
