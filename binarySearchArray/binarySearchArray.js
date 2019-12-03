/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */


var binarySearch = function (array, target) {
	 var middelIndex = arguments[2]||Math.floor(array.length/2)
//console.log(middelIndex)
if((middelIndex!==array.length-1) ||  (middelIndex!== 0))
{
	if(target === array[middelIndex])  return middelIndex

	if(target > array[middelIndex]){
		middelIndex =Math.floor(((array.length-middelIndex)/2)+middelIndex);
		if(middelIndex === array.length-1) {
			if(array[middelIndex] === target) return true
				return null
		}
		binarySearch(array,target,middelIndex)
		
	}else{ 
		if(target < array[middelIndex]){
		middelIndex =Math.floor(middelIndex/2);
			if(middelIndex === 0) {
			if(array[middelIndex] === target) return true
				return null
		}
		binarySearch(array,target,middelIndex)}
	
}}
	
	
};
