// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return “null” on invalid input.

// You've got Helpers!

// var DIGIT_VALUES = {
//   
//  I: 1,
//     V: 5,
//     X: 10,
//     L: 50, 
//     C: 100,
//     D: 500,
//     M: 1000
//   };

function translateRomanNumeral (romanNumeral) {
    // Write your code here, and
    // return your final answer.
    var DIGIT_VALUES = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII:8,
    IX: 9,
    X: 10, 
    XX: 20,
    XXX: 30,
    XL: 40,
    L: 50,
    LX: 60, 
    LXX: 70,
    LXXX: 80,
    XC: 90,
    C: 100,
    CC: 200,
    CCC: 300,
    CD: 400,
    D: 500,
    DC: 600,
    DCC: 700,
    DCCC: 800,
    CM: 900,
    M:1000,
    MM:2000,
    MMM:3000 
  };
  var existNum = 0
  var i = 0;
  var sum=0;
  var s = '';
  while( i <romanNumeral.length){
  console.log(DIGIT_VALUES[romanNumeral[i]] )
  s = s + romanNumeral[i]
  console.log(existNum)
  	if(DIGIT_VALUES[s] === undefined){
  		console.log(DIGIT_VALUES[romanNumeral[i]])
  		//existNum = DIGIT_VALUES[romanNumeral[i - 1]];
  		sum += existNum
  		
  		i--
  		s = ''

i
  	}else {
  		console.log(s)
  	existNum = DIGIT_VALUES[s];
    if(i === romanNumeral.length - 1){
    	return sum + existNum
    }
console.log(existNum)
 	}
   
  	i++
  }
  //  = DIGIT_VALUES[romanNumeral[0]]
  // for(let i = 1; i < romanNumeral.length; i++){
  // 	if(DIGIT_VALUES[romanNumeral[i]] <= sum ) {
  // 	 sum = sum + DIGIT_VALUES[romanNumeral[i]]
  // 	}
  // 	else {
  // 		sum = DIGIT_VALUES[romanNumeral[i]]- sum 
  // 	}
  // }
  return sum 

  }

console.log(translateRomanNumeral('MMXIV'))