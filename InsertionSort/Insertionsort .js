// Sort a linked list using insertion sort.
// Algorithm of Insertion Sort:

//1- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
//2- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// 3-It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5


//   Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}



/** 
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    var array = []

    head.val
};


var getVal = function (head, array = []) {
    console.log('derfgthj')
    console.log(array)
    array.push(head.val)
    if (head.next) {
        getVal(head.next, array)

    }
    else { return array }


}

var head = new ListNode(5)
var node2 = new ListNode(0)
var node3 = new ListNode(1)
var node4 = new ListNode(4)
var node5 = new ListNode(2)
head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

getVal(head)
