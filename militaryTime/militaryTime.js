/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
var amPm=time.substr(-2)
var result=''
 var timeArr=time.substr(0,time.length-2).split(':')
 if(timeArr.length!==2)return 'error input'

 var houre=+timeArr[0]
var minutes=timeArr[1]

if(amPm ==='pm'){
  houre+=12
 if(houre===24)houre='12'
return (houre+':'+minutes)

}else if(amPm==='am'){
if(houre===12)houre='00'
 return (houre+':'+minutes)
}else{
 return 'error input'
}
}
