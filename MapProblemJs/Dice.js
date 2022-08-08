let dieMap = new Map();
let num =100;
for(let i=1;i<=6;i++)
{
    dieMap.set(i,parseInt(0))

}
let i = 1;
while(i<=num)
{
    let dice = Math.floor(Math.random()*6)+1;
    let increaseNum = dieMap.get(dice);
    let diceRes = increaseNum+1;
    dieMap.set(dice,diceRes);
    if (diceRes ===10)
    {
        console.log("Maximum dice number which reached 10 times first = "+dice)
        break;
    }
    i++;
}
console.log(dieMap);
let minDiceNum = dieMap.get(1);
let minDiceKey = 1;
for(let [key,value] in dieMap )
{
    if (value <= minDiceNum )
    {
        min = value;
        minDiceKey = key;
    }
}
    console.log("Minimum dice number when max reached : "+minDiceKey)