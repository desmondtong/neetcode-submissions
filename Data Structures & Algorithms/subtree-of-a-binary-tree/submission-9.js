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
    isSameTree(a, b) {
        if (!a && !b) {
            return true;
        } else if (!a || !b) {
            return false;
        }

        // console.log("isSameTree", a.val, b.val);
        const left = this.isSameTree(a.left, b.left);
        const right = this.isSameTree(a.right, b.right);
        // console.log("isSameTree", { left, right });

        return a.val == b.val && left && right;
    }

    isSubtree(root, subRoot) {
        if (!root) return false;

        // console.log("isSubtree", root.val);
        if (this.isSameTree(root, subRoot)) return true;
        const left = this.isSubtree(root.left, subRoot);
        const right = this.isSubtree(root.right, subRoot);

        return left || right;
    }
}
