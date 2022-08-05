let dieMap = new Map();
let num = 10;
let dice =0;
for(let i=1;i<num;i++)
{
dice = Math.floor(Math.random()*6)+1;
dieMap.set(i,dice);
}
console.log(dieMap);