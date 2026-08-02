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
     * @return {void}
     */

    constructor() {
        this.curr;
    }

    solve(head) {
        if(!head) return;

        this.solve(head.next);

        let temp = this.curr.next;
        if(temp === null) {
            return;
        } else if(this.curr == head) {
            head.next = null;
            return;
        }

        this.curr.next = head;
        head.next = temp == head ? null : temp;
        this.curr = temp;
    }

    reorderList(head) {
        this.curr = head;
        this.solve(head);
        return head;
    }
}
