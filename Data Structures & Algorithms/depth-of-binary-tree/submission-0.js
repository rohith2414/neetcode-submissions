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
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0;
        let queue = new Queue();
        queue.push(root);
        let height = 0;
        while(queue.size()) {
            let n = queue.size();
            for(let i = 0; i < n; i++) {
                let node = queue.dequeue();
                if(node.left) queue.enqueue(node.left);
                if(node.right) queue.enqueue(node.right);
            }
            height++;
        }

        return height;
    }
}
