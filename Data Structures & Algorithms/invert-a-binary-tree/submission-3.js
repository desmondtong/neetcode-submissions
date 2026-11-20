/**
 * Definition for a binary tree root.
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
     * @return {TreeNode}
     */
    invertTree(root) {
        //bfs
        const invertCurNode = (node) => {
            if (!node) return;

            const left = node?.left;
            const right = node?.right;
            node.left = right;
            node.right = left;

            return node;
        };

        const queue = root ? [root] : [];
        while (queue.length) {
            // for (let i = 0; i < queue.length; i++) {
                let cur = queue.shift();
                cur = invertCurNode(cur);

                if (cur.left) queue.push(cur.left);
                if (cur.right) queue.push(cur.right);
            // }
        }

        return root;
    }
}
