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
     * @return {ListNode}
     */

    reverse(curr, next) {
        if(next === null) {
            return curr;
        }

        let head = this.reverse(next, next.next);

        next.next = curr;
        curr.next = null;
        return head;
    }

    reverseList(head) {
        if(head === null) {
            return null;
        }
        return this.reverse(head, head.next);
    }
}
