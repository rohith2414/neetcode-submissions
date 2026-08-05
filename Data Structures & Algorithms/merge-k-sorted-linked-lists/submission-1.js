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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    merge(l1, l2) {
        let dummy = new ListNode();
        let tail = dummy;
        while (l1 && l2) {
            if(l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }

            tail = tail.next;
        }

        tail.next = l1 || l2;
        return dummy.next;
    }

    mergeKLists(lists) {
        if(!lists.length) {
            return null;
        } else if(lists.length == 1) {
            return lists[0] || null;
        }
        let iteration = 1;
        while(iteration < lists.length) {
            for(let i = 0; i + iteration < lists.length; i += iteration * 2) {
                lists[i] = this.merge(lists[i], lists[i + iteration]);
            }

            iteration *= 2;
        }

        return lists[0];
    }
}
