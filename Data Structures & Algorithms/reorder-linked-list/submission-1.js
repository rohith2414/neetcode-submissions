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
    reorderList(head) {
        let arr = [];

        let temp = head;
        while(temp != null) {
            arr.push(temp);
            temp = temp.next;
        }

        let first = arr.slice(0, Math.ceil(arr.length / 2));
        let second = arr.slice(Math.ceil(arr.length / 2), arr.length);
        let dummy = new ListNode(0, null);
        temp = dummy;
        let i = 0;
        while(second.length) {
            let node = first[i];
            temp.next = node;
            temp = node;
            i++;

            node = second.pop();
            temp.next = node;
            temp = node;
        }

        while(i < first.length) {
            let node = first[i];
            temp.next = node;
            temp = node;
            i++;
        }

        temp.next = null;

        return dummy.next;
    }
}
