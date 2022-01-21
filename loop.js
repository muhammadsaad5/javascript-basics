
sum = 0;

for(a=1; a<=5000; a++)
{
    sum = sum+a;
}

console.log(sum);

//count & sum of no divisible by 3

count = 0;
sum = 0;
for(a=1; a<=10; a++){
if(a%3==0){
count = count+1;
sum=sum+a;
}
}
console.log(count)
console.log(sum)

//find all the prime number b/w 1 to 1000.

for(a=1; a<=100; a++){
if(a%2!=0){
console.log(a)
}
}
