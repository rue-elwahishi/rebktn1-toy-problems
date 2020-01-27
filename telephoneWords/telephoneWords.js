/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

function telephoneWords(digitString) {
 obj={
 	1:1,
 	2:['A','B','C'],
 	3:['D','E','F'],
 	4:['G','H','I'],
 	5:['j','k','l'],
 	6:['M','N','O'],
 	7:['P','Q','R','S'],
 	8:['T','U','V'],
 	9:['W','X','Y','Z'],
 	0:0
 }
var str=''
var result=[]
for (var i = 0; i < digitString.length; i++) {
	if(digitString[i]===1 && digitString[i]===0) {
		str=str+digitString[i]

	}else{
		let array=obj[digitString[i]]
		for (var i = 0; i < array.length; i++) {
			
		}

	}
}


// 
// var result=[]
// for (var i = 0; i < digitString.length; i++) {
// 	if(digitString[i]===1 && digitString[i]===0) {
// 		str=str+digitString[i]
// 		if(result.length >1)
// 			{
// 				for (var i = 0; i < result.length; i++) {
// 					result[i]=result[i]+digitString[i]
// 				}
// 			}else{
// 				result.push(digitString[i])
// 			}

// 	}else{
// 		for (var j = 0; j < digitString[i].length; j++) {
// 			//if result 
// 			if(result.length > 1)
// 			{
// 				for (var k = 0; k < result.length; k++) {
// 					result[k]=result[k]+digitString[i][j]
// 				}
// 			}else
// 			//str=str+digitString[i][j]
// 		}
// 	}   

// }

}
