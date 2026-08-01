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
    reverseList(head) {
        let arr = [];
        let temp = head;
        while(temp != null) {
            arr.push(temp.val);
            temp = temp.next;
        }

        temp = head;

        while(temp != null) {
            temp.val = arr.pop();
            temp = temp.next;
        }

        return head;
    }
}
