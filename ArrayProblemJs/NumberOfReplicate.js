let rnd =0;
let numArr = Array();
function ranNum()
{
    for(let i =1; i<=100;i++)
    {
        if((i%10)==Math.floor(i/10))
        {
            numArr[rnd] = i;
            rnd++;
        }
    }
}
ranNum();
console.log("Total Numbers: "+numArr);