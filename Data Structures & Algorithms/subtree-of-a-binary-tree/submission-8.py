# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def isSameTree(self, tree1: Optional[TreeNode], tree2: Optional[TreeNode]) -> bool:
        if not tree1 and not tree2:
            return True
        elif not tree1 or not tree2:
            return False

        return (
            tree1.val == tree2.val
            and self.isSameTree(tree1.left, tree2.left)
            and self.isSameTree(tree1.right, tree2.right)
        )

    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root:
            return False

        if self.isSameTree(root, subRoot):
            return True

        left = self.isSubtree(root.left, subRoot)
        right = self.isSubtree(root.right, subRoot)

        return left or right
