/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let total = new ListNode(0, null);
  let result = [];
  let memory = 0;
  while (l1 && l2) {
    if (l1.val + l2.val >= 10) {
      total.val = (l1.val + l2.val) % 2;
      memory = (l1.val + l2.val) / 10;
    } else {
      if (memory != 0) {
        total.val = l1.val + l2.val + memory;
        memory = 0;
      } else {
        total.val = l1.val + l2.val;
      }
    }
    result.push(total.val);
    total.next = l1;
    total = total.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  return result;
};

const L1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
const L2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

const result = addTwoNumbers(L1, L2);
console.log(result);
