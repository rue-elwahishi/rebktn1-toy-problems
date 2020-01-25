/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
​
// Helpers
​
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  return obj;
}
​
var reverseLinkedList = function(linkedList) {

var arr=[]	
var closure=function(linkedList){

	if(linkedList.next!==null){
		arr.unshift(linkedList.val)
		closure(linkedList.next)
	}else{
		arr.unshift(linkedList.val)
	}
 }
var reverse=new Node(arr[0])
 for (var i = 1; i < arr.length; i++) {
 	var newNode=new Node(arr[i])
 	reverse.next = newNode
 	reverse=newNode
 }
};