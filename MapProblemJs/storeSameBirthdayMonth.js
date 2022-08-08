let map=new Map();
let i =1;
while(i<=12)
{
    map.set(i,parseInt(0));
    i++
}
for(let num=1;num<=50;num++)
{
    let birthMonth=Math.floor(Math.random()*12)+1;
    let IncreasePerson=map.get(birthMonth);
    map.set(birthMonth,(IncreasePerson+1));
}
for(let [key,value] of map)
{
    console.log("in "+key + " Month: "+value+" persons have birthday");
}