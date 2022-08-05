let rand =0;
let arrayOfNumber = Array();
for(let i=0;i<10;i++)
{
    rand = Math.floor(Math.random()*901)+100;
    arrayOfNumber.push(rand);
}
console.log(arrayOfNumber)
function sortArray()
{
    arrayOfNumber.sort();
    console.log(arrayOfNumber);
}
function secondMaxAndMinNumber()
{
    sortArray();
    console.log("Second Highest Number: "+arrayOfNumber[arrayOfNumber.length-2]);
    console.log("Second Minimum Number: "+arrayOfNumber[1]);
}
let x = secondMaxAndMinNumber();