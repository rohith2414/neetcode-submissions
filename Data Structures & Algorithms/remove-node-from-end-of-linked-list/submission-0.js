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
    removeNthFromEnd(head, n) {
        let nodes = [];
        let temp = head;

        while(temp != null) {
            nodes.push(temp)
            temp = temp.next;
        }

        let idx = nodes.length - n;
        let dummy = new ListNode(0, null);
        temp = dummy;
        for(let i = 0; i < nodes.length; i ++) {
            let node = nodes[i];
            if(i !== idx) {
                temp.next = node;
                temp = node;
            }
        }
        temp.next = null;
        return dummy.next;
    }
}
