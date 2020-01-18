/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
function longestRun(string) {
	var obj={}
	var start=0
	var count=1

	for (var i =0; i < string.length-1; i++) {
		if(string[i] === string[i+1]){
			count++
			obj[count]=[start,i+1]
		}else{
			start=i+1
			count=1
			
		}
	}
	var array=Object.keys(obj)

	return obj[array[array.length-1]]

}
=======



>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
