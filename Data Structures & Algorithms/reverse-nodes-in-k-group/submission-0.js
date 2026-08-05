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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let arr = [];
        let temp = head;
        while(temp != null) {
            arr.push(temp.val);
            temp = temp.next;
        }

        let dummy = new ListNode();
        temp = dummy;
        let i = 0;
        while(i + k <= arr.length) {
            let nums = arr.slice(i, i + k).reverse();
            for(let n of nums) {
                let node = new ListNode(n);
                temp.next = node;
                temp = node;
            }
            i += k;
        }

        let count = arr.length / k;
        if(Number.isInteger(count)) {
            return dummy.next;
        }

        count = Math.floor(count) * k;
        for(let i = count; i < arr.length; i++) {
            let node = new ListNode(arr[i]);
            temp.next = node;
            temp = node;;
        }

        return dummy.next;
    }
}
