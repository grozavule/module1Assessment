///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
//created a variable to hold the sum of all acres
let totalAcres = 0;
//used the length of fujiAcres to create the loop since all arrays in question are the same length
//this would fall down if, for any reason, the arrays didn't include values for all seven days of the week
for(let i=0; i < fujiAcres.length; i++)
{
    totalAcres += fujiAcres[i];
    totalAcres += galaAcres[i];
    totalAcres += pinkAcres[i];
}
console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

//the length of fujiAcres (or any of the arrays) should be equal to the number of work days
//this solution would automatically adjust if, for instance, Saturday and Sunday numbers weren't reported in the fujiAcres array
//this would fall down if pinkAcres and galaAcres had fewer work days than fujiAcres
let averageDailyAcres = totalAcres / fujiAcres.length;
console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(acresLeft > 0)
{
    acresLeft -= averageDailyAcres;
    days++;
}
console.log(days);


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
const tonsPerAcre = 6.5;
//declared the arrays
let fujiTons = [];
let galaTons = [];
let pinkTons = [];
//looped through all arrays at once assuming each has the same length as fujiAcres
for(let i = 0; i < fujiAcres.length; i++)
{
    //multiplied the acres picked of each variety by the tonsPerAcre amount to calculate total tons picked per day per variety
    fujiTons.push(fujiAcres[i] * tonsPerAcre);
    galaTons.push(galaAcres[i] * tonsPerAcre);
    pinkTons.push(pinkAcres[i] * tonsPerAcre);
}
//output the result to the console
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
const poundsPerTon = 2000;
//declared the arrays;
let fujiPounds = [];
let galaPounds = [];
let pinkPounds = [];

//looped through all of the variety tons arrays at once
for(let i = 0; i < fujiTons.length; i++)
{
    //multiplied the number of tons per day per variety by poundsPerTon to convert the values to pounds
    fujiPounds.push(fujiTons[i] * poundsPerTon);
    galaPounds.push(galaTons[i] * poundsPerTon);
    pinkPounds.push(pinkTons[i] * poundsPerTon);
}
console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
//declared the initial values of the profits for each variety
let fujiProfit = 0;
let galaProfit = 0;
let pinkProfit = 0;
//looped through all of the pounds-per-variety arrays at once
for(let i = 0; i < fujiPounds.length; i++)
{
    //multiplied the number of pounds per variety per day by the variety's price per pound to calculate daily profit
    //added the daily profit per variety to the variety's running total profit
    fujiProfit += (fujiPounds[i] * fujiPrice);
    galaProfit += (galaPounds[i] * galaPrice);
    pinkProfit += (pinkPounds[i] * pinkPrice);
}
//output the result to the console
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//added the profits per variety together to calculate the total profit
let totalProfit = fujiProfit + galaProfit + pinkProfit;
//output the result to the console
console.log(totalProfit);