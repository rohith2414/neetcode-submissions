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
        let count = 0;

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
    }
}
