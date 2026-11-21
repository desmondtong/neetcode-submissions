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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;

        const bfs = (node) => {
            if (!node || !isBalanced) return 0;

            const left = bfs(node.left);
            const right = bfs(node.right);
            console.log(node.val, { left, right });
            if (Math.abs(left - right) > 1) isBalanced = false;

            return 1 + Math.max(left, right);
        };

        bfs(root);
        return isBalanced;
    }
}
