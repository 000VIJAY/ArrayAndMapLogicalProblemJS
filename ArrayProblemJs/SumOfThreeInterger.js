let ran=0;
let sumOfThreeInt = Array();
function randomNum()
{
    for (let i=1;i<=3;i++)
    {
        rnd = Math.floor(Math.random()*1000) +1;
        console.log(rnd);
        sumOfThreeInt.push(rnd);
    }
}
let x = randomNum();
console.log(sumOfThreeInt);

function myFunc(total,rnd)
{
    return total += rnd;
}
let nm = sumOfThreeInt.reduce(myFunc);
console.log(nm)
