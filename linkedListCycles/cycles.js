/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null

A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

var hasCycle = function(linkedList) {
 var objVal={}

while(linkedList.next !==null){

if(objVal[linkedList.value] !== undefined ) return true

	console.log(linkedList.value)

	objVal[linkedList.value]=1;

linkedList = linkedList.next

}
return false
}


var nodea=new Node('a')
var nodeb=new Node('b')
var nodec=new Node('c')
var noded=new Node('d')
var nodee=new Node('e')

nodea.next=nodeb
nodeb.next=nodec
nodec.next=noded
noded.next=nodee
 nodee.next=nodeb


console.log(hasCycle(nodea))
// var closure=function(linkedList){

// 	if(linkedList.next!==null){
// 		obj[linkedList.val]=1;
// 		closure(linkedList.next)
//  }else{
//  	if(obj[linkedList.val] !== undefined)
//  	 return true
//  }
// return false
// };


// return closure(linkedList)
