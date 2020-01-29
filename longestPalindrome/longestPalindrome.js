/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
 var obj={}
 var max=''
 for (var i = 0; i < string.length-2; i++) {

 	for (var j = i+2; j < string.length; j++) {
 		var str=string.substring(i,j)
 		//console.log(str)
 		if(isPalindrome(str)){
 			if(str.length > max.length) max=str
 		}
 	}
 }
 return max
}


var isPalindrome=function(str){
if(str.split("").reverse().join("") === str){
	//console.log(str)
	return true
}
return false
}

console.log(longestPalindrome("My dad is a racecar athlete"))