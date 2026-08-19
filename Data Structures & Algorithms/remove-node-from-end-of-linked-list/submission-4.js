/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */

    remove(head, n) {
        if(!head) {
            return {count: 0, node: null};
        }
        let {count, node} = this.remove(head.next, n);
        head.next = node;
        return ++count !== n ? {count, node: head} : {count, node};
    }

    removeNthFromEnd(head, n) {
        return this.remove(head, n).node;
    }
}
