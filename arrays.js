//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

//To make a full copy of faveColors, I only provided the slice method with the first index of the array as the first parameter
//Without a second parameter, the method assumes that I want to include the remainder of the array as well
const colorCopy = faveColors.slice(0);

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
//Added purple to the end of the colorCopy array
colorCopy.push('purple');

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
//created a new array of only the middle three numbers of the numbers array
const middleNums = numbers.splice(1,3);

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

// CODE HERE
const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352];
//created an empty array to hold 'big' or 'small' string values
const answers = [];
for(let i = 0; i < bigOrSmallArray.length; i++)
{
  //checked if the value in the bigOrSmallArray was greater than 100
  if(bigOrSmallArray[i] > 100)
  {
    answers.push('big');
  }
  //checked if the value in the bigOrSmallArray was less than or equal to 100
  else if(bigOrSmallArray[i] <= 100)
  {
    answers.push('small');
  }
}