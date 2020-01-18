// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0




// solutuin2

var arrayCeption = function (arrays, deep = 0, count = 0) {

    if (arrays.flat(Infinity).length === 0) return 0

    if (arrays.length > 0) {
        deep++
    }

    for (let i = 0; i < arrays.length; i++) {
        if (Array.isArray(arrays[i]))
            count = arrayCeption(arrays[i], deep)
        console.log('count', count)
    }
    return deep
}


console.log(arrayCeption([[5], [[]]]))