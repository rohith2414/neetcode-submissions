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

    reverseLL(head) {
        if(!head.next) return head; 

        let last = this.reverseLL(head.next);
        head.next.next = head;
        head.next = null;
        return last;
    }

    reorderList(head) {
        let fast = head;
        let slow = head;

        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let rev = this.reverseLL(slow);
        let curr = head;

        while(rev.next != null) {
            let tempNext = curr.next;
            curr.next = rev;
            let tempPrev = rev.next;
            rev.next = tempNext;
            rev = tempPrev;
            curr = tempNext;
        }

        return head;
    }
}
