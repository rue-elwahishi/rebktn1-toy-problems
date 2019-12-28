/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null 
if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/
var evenOccurrence=function(array){
var obj={};
   
   for (var i = 0; i < array.length; i++) {
   	var element = '';
   	if(typeof array[i] === 'object'){
   		if(Array.isArray(array[i])){
   			element=array[i].join();
   			var count=1
   			for (var j = i+1; j < array.length; j++) {
   				if(element === array[j].join()){
   					count++
   					obj[i]=[element,count]
   					array.splice(j,1)
   					j--
   				}
   			}
   			
   			if(count % 2 === 0) return array[i];
   			array.splice(i,1)
   			i--
   		}
   		else{
   			element=Object.entries(array[i]).join();
   			var count=1
   			for (var j = i+1; j < array.length; j++) {
   				if(element ===Object.entries(array[j]).join()){
   					count++
   					obj[i]=[element,count]
   					array.splice(j,1)
   					j--
   				}
   			}
   			
   			if(count % 2 === 0) return array[i];
array.splice(i,1)
   			i--
   		}

   	}
   	else{
   			element=array[i];
   			var count = 1
   			for (var j = i+1; j < array.length; j++) {
   				if(element === array[j]){
   					count++
   					console.log('--->',element)
   					obj[i]=[element,count]
   					
   					array.splice(j,1)
   					j--
   				}

   			}
   			array.splice(i,1)
   			i--
   			//console.log('--->',count)
   			if(count % 2 === 0 && count !==0) return array[i];
   	}
   }
   return null
}

