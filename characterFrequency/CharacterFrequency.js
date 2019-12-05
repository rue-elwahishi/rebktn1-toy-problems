/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

var characterFrequency=function(string){
	
	var objOfChar={};
	for (var i = 0; i < string.length; i++) {
		if(objOfChar[string[i]] === undefined){
			objOfChar[string[i]]=1;
		}else{
			objOfChar[string[i]]=objOfChar[string[i]]+1;

		}
	}

	var array= Object.keys(objOfChar).map((character)=>{
			return [character,objOfChar[character]]
	})

	return sort(array)
}


var sort = function(array,sorted=false) {

if(sorted === false){
	  sorted=true;
  for (var i = 0; i < array.length-1; i++) {
  	    
  	    if( array[i][1] < array[i+1][1]){
  	       
  	    	var value = array.splice(i+1,1,array[i])[0]
  	    	array.splice(i,1,value)

	    sorted=false;
  	    }	
  }
 
if(!sorted)
   sort(array);
}

return array;
};