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
        let num1 = "";
        let num2 = "";
        let temp1 = l1, temp2 = l2;
        while(temp1 != null && temp2 != null) {
            num1 += temp1.val;
            num2 += temp2.val;
            temp1 = temp1.next;
            temp2 = temp2.next;
        }

        while(temp1 != null) {
            num1 += temp1.val;
            temp1 = temp1.next;
        }

        while(temp2 != null) {
            num2 += temp2.val;
            temp2 = temp2.next;
        }
        num1 = BigInt(num1.split('').reverse().join(''));
        num2 = BigInt(num2.split('').reverse().join(''));
        let num3 = num1 + num2;
        if(num3 === 0n) return new ListNode();
        let dummy = new ListNode();
        let temp = dummy;

        while(num3 > 0n) {
            let num = Number(num3  % 10n);
            let node = new ListNode(num, null);
            temp.next = node;
            temp = node;
            num3 = num3 / 10n;
        }

        return dummy.next;
    }
}
