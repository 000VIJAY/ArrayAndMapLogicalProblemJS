let rand =0;
let arrOfRandom = Array();
for(let i=1;i<=10;i++)
{
    rand=Math.floor(Math.random()*901) +100;
    arrOfRandom.push(rand);
}
console.log(arrOfRandom);
function secondbiggestNumber()
{
   let biggeest =0,secondBiggest=0;
   for (let i =0;i<=arrOfRandom.length;i++)
   {
    let arr = arrOfRandom[i]
    if(arr > biggeest)
    {
        secondBiggest = biggeest;
        biggeest = arr;
    }
    else if(arr > secondBiggest && arr<biggeest)
    {
        secondBiggest =arr;
    }
}
console.log("second Biggest Number: " + secondBiggest)
}
let x = secondbiggestNumber();

const minimum = rand => {return rand.indexOf(Math.min(rand));};
 const secondMinimum = rand => {const copy = rand.slice();copy.splice(minimum(copy), 1);
    return copy[minimum(copy)];};
 console.log("Second Smallets Number:- "+secondMinimum(rand));