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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let lca = null;

        const dfs = (node) => {
            if (!node) return false;

            const left = dfs(node.left);
            const right = dfs(node.right);
            if ((left && right) || ((node.val == p.val || node.val == q.val) && (left || right)))
                lca = node;
            // console.log(node.val, { left, right });

            return node.val == p.val || node.val == q.val || left || right;
        };
        dfs(root);

        return lca;
    }
}
