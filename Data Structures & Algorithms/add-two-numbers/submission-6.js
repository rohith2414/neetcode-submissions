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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let temp1 = l1, temp2 = l2;
        let dummy = new ListNode();
        let temp = dummy;
        while(temp1 != null && temp2 != null) {
            let sum = temp1.val + temp2.val + carry;
            let val = sum % 10;
            carry = Math.floor(sum / 10);
            let node = new ListNode(val);
            temp.next = node;
            temp = node;
            temp1 = temp1.next;
            temp2 = temp2.next;
        }

        while(temp1 != null) {
            let sum = temp1.val + carry;
            let val = sum % 10;
            carry = Math.floor(sum / 10);
            let node = new ListNode(val);
            temp.next = node;
            temp = node;
            temp1 = temp1.next;
        }

        while(temp2 != null) {
            let sum = temp2.val + carry;
            let val = sum % 10;
            carry = Math.floor(sum / 10);
            let node = new ListNode(val);
            temp.next = node;
            temp = node;
            temp2 = temp2.next;
        }

        if(carry) {
            temp.next = new ListNode(carry);
        }

        return dummy.next;

    }
}
