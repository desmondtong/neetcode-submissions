/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    isSameTree(x, y) {
        if (!x && !y) {
            return true;
        } else if (!x || !y) {
            return false;
        }

        return (
            x.val == y.val && this.isSameTree(x.left, y.left) && this.isSameTree(x.right, y.right)
        );
    }

    isSubtree(root, subRoot) {
        if (!root) return false;
        // if (!subRoot) return true;

        // pre-order
        if (this.isSameTree(root, subRoot)) return true;
        const left = this.isSubtree(root.left, subRoot);
        const right = this.isSubtree(root.right, subRoot);

        return left || right;
    }
}
