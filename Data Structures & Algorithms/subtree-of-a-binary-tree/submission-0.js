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
    isSubtree(root, subRoot) {
        let isSubtree = false;

        const isSameTree = (x, y) => {
            if (!x && !y) {
                return true;
            } else if (!x || !y) {
                return false;
            }

            return x.val == y.val && isSameTree(x.left, y.left) && isSameTree(x.right, y.right);
        };

        const dfs = (node) => {
            if (!node) return;

            if (!isSubtree && node.val == subRoot.val) {
                isSubtree = isSameTree(node, subRoot);
                console.log({ isSubtree });
            }
            dfs(node.left);
            dfs(node.right);
        };
        dfs(root);
        return isSubtree;
    }
}
