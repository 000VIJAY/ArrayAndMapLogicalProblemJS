 let num=77;
console.log("Array of Prime factor of given number ");
let primeArry = Array();
for (let i = 2; i <= (num / 2); i++) 
{           
    while (num % i == 0)              
    {
        primeArry.push(i);
        num = num / i;                         
    }
}
if(num>1)
{
    console.log(num);
    primeArry.push(num);  
}
console.log(primeArry);