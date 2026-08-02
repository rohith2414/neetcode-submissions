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

    solve(head, n) {
        if(!head) return {num: 0, last: null};
        
        let {num, last} = this.solve(head.next, n);

        let count = 1 + num;

        if(count != n) {
            head.next = last;
            return {num: count, last: head};
        }

        return {num: count, last: head.next};
    }

    removeNthFromEnd(head, n) {
        return this.solve(head, n).last;
    }
}
