let rnd =0;
let replicateArr = Array();
let numArr = Array();
function ranNum()
{
    for(let i =1; i<=100;i++)
    {
        rnd = Math.floor(Math.random()*100);
        console.log(rnd)
        numArr.push(rnd);
    }
}
ranNum();
console.log("Total Numbers: "+numArr);
function numOfOppositeIsSame()
{
    for(let i=0;i<=numArr.length;i++)
    {
        if (rnd%10==0)
        {
            replicateArr.push(rnd);   
        }
        else 
        {
            i++;
        }
    }
}
numOfOppositeIsSame();
console.log("Values: "+replicateArr);