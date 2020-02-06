/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/


function sudokuChecker(board) {
  let matrix=board.split('\n').map(str=>str.split(''));

  for (var i = 0; i < matrix.length; i++) {
  	console.log (matrix[i])

var row = matrix[i]

  	if(!test([...row])) return false
  		var col=matrix.map(arr => {
  			console.log(arr[i])	
  		})

//console.log('--',col)
  	//if(!test(col)) return false
  }

return true
  
}



var test = function(array){
	var sortArray=array.sort()
	for (var i = 1; i <= 9; i++) {
		if(i != sortArray[i-1]) return false
	}
return true
}

var columnTest=function(col){

}

var str="735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"
console.log(sudokuChecker(str))