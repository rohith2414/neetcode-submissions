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
     * @return {boolean}
     */
    hasCycle(head) {
        let first = head;
        let second = head;

        while(second != null) {
            first = first.next;
            second = second.next?.next;

            if(first === second) {
                return true;
            }
        }

        return false;

        /*
        let temp = head;
        let set = new Set();
        while(temp != null) {
            if(set.has(temp)) {
                return true;
            }
            set.add(temp);
            temp = temp.next;
        }
        return false;
        */
    }
}
