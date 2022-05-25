/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num , sum) {
  //Your code here
    if (num === 0) { return sum}
    sum *= num
    return findFactorial(--num , sum)
}

//Exercise 2
const reverseString = function() {
  //Your code here
    if(str.length === 0) { return str }
    return   reverseString( str.slice(1,str.length) ) + str[0] 
}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function() {
  //Your code here
  if (arr1.length === 0) { return }
  arr2.push( arr1[0] )
  arr1.shift()
  swap(arr1 , arr2)
}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }