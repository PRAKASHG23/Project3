// Write a program to calculate factorial of a number using reduce method and using for loops
function multi(a,b){
    return(a*b)
}
arr=[]
n=parseInt(prompt("Enter the Element whose factorial is going to be calculated"))
for(let i=1 ;i<n+1;i++){
    arr.push(i);}
console.log(arr)
let fact=arr.reduce(multi)
console.log("Factorial of the number is",fact)