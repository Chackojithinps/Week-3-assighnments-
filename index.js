// let charInput=prompt("Enter a character");
// console.log("The character you entered is " +charInput);

// let num1=parseInt(prompt("Enter the first number"))
// console.log("num1 "+num1);
// let num2=parseFloat(prompt("Enter the second number"))
// console.log("num2 "+num2)
// let sum=parseFloat(num1+num2)
// console.log("The sum is "+sum)

// let P=parseInt(prompt("Enter the principal amount"))
// console.log("principal amount is "+P)
// let R=parseFloat(prompt("Enter the Intrest rate"))
// console.log("Intrest rate is "+R)
// let n=parseFloat(prompt("Enter the number of years"))
// console.log("number of years is "+n)

// let SI=(P*R*n)/100
// console.log("Simple intrest is "+SI)

// let Mark=parseFloat(prompt("Enter the Mark"))
// console.log("Mark is "+Mark )
// if(Mark>=50){
//     console.log("Passed")
// }else{
//     console.log("Failed")
// }

// let Mark=parseFloat(prompt("Enter the Mark"))
// console.log("Mark "+Mark)
// if(Mark>=90 && Mark<=100){
//     console.log("The grade is A")
// }else if(Mark>=80 && Mark<=89){
//     console.log("The grade is B");
// }
// else if(Mark>=70 && Mark<=79){
//     console.log("The grade is C");
// }
// else if(Mark>=60 && Mark<=69){
//     console.log("The grade is D");
// }
// else if(Mark>=50 && Mark<=59){
//     console.log("The grade is E");
// }
// else{
//     console.log("Failed")
// }


// let Day=parseInt(prompt("Enter the Day"))
// console.log("Day is "+Day)
// switch(Day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday")
//         break;
//     case 5:
//         console.log("Thirsday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
//         console.log("Saturday")
//         break;
//     default:
//         console.log("Invalid Entry")    
// }

// let number=parseInt(prompt("Enter the number"));
// console.log("The number is "+ number )
// for(var i=1;i<=10;i++){
//     var Product=i*number;
//     console.log(i+" x "+number +" = "+Product)
// }
// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach((value)=>{
//     product=value*number
//     console.log(value+" x "+number +" = "+product)
// })

// let limit=parseInt(prompt("Enter the number"));
// console.log("The limit is "+ limit)
// const arr=[];
// for(var i=0;i<limit;i++){
//     arr[i]=i+1;
// }
// const odd=arr.filter((value)=>value%2==1).reduce((total,value)=>{
//     return total+value;
// },0)
// console.log("The sum of odd number is "+odd)


// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += j + ' ';
//     }
//     console.log(row);
// }

// let row=1+" "+2+" "+3+" ";
// console.log(row)
// var row='';
// for(var i=1;i<=5;i++){
//      row=row+i+" "
// }
// console.log(row)

// const size=Number(prompt("Enter the size of the array"))
// console.log("size is "+size)
// let arr1=[]
// let arr2=[]
// for(var i=0;i<size;i++){
//   arr1[i]=Number(prompt("Enter the values into the first array"))
// }
// console.log("The first array is "+arr1)
// for(var i=0;i<size;i++){
//   arr2[i]=Number(prompt("Enter the values into the second array"))
// }
// console.log("The second array is "+arr2)

// let temp=arr1.slice();
// arr1=arr2.slice()
// arr2=temp;;
// console.log("Arrays after swapping")
// console.log("Array 1 is "+arr1)
// console.log("Array 2 is "+arr2)

// const size=Number(prompt("Enter the size of the array"))
// console.log("The size of the array is "+size)
// let arr=[]
// for(var i=0;i<size;i++){
//   arr[i]=Number(prompt("Enter the values into the array"))
// }
// console.log("The values of array are "+arr)
// const evenNumber=arr.filter((value)=>value%2===0).reduce((total)=>total+1,0)
// console.log("Number of even numbers in the given array is "+evenNumber)


// const size=Number(prompt("Enter the size of the array"))
// console.log("The size of the array is "+size)
// let arr=[]
// for(var i=0;i<size;i++){
//   arr[i]=Number(prompt("Enter the values into the array"))
// }
// console.log("The sorted array is")
// arr.sort((a,b)=>b-a);
// console.log(arr)


// const str=prompt("Enter a string");
// console.log(str);
// const checkPalindrome=(str)=>{
//     for(var i=0;i<str.length;i++){
//       if(str[i]!==str[str.length-1-i]){
//         // flag=1;
//         return false;
//       }
//       return true;
//     }
    // if(flag===1){
    //   console.log("Entered string is not a palindrome")
    // }else{
    //   console.log("Entered string is palindrome")
    // }
// }
// let check=checkPalindrome(str)
//  if(check){
//    console.log("Entered string is palindrome")

//     }else{
//       console.log("Entered string is not a palindrome")

// }

// function main(){
//   const size=Number(prompt("Enter the size of the array"))
//   console.log("The size is "+size)
//   const arr=[]
//   getArray(size,arr)
//   displayArray(arr)

// }
// function getArray(size,arr){
//   for(var i=0;i<size;i++){
//      arr[i]=Number(prompt("Enter the values into the array"))
//   }
// }
// function displayArray(arr){
//   console.log("The array is ")
//   console.log(arr)
// }
// main();

  // const num=Number(prompt("Enter a number"))
  // console.log("The number is "+num)
  // const isPrimeNumber=(num)=>{
  //     var flag=0;
  //     if(num>=2){
  //       for(var i=2;i<num;i++){
  //         if(num%i==0){
  //          flag=1;
  //          break;
  //         }
  //      }
  //      if(flag===1){
  //        console.log(num+" is not a prime number")
  //      }else{
  //        console.log(num+" is a prime number")
  //      }
  //     }else{
  //       console.log(num +" is not a prime number")
  //     }
     
  // }
  // isPrimeNumber(num);

  // const writtenTest=Number(prompt("Enter a number"))
  // const labExam=Number(prompt("Enter a number"))
  // const assignment=Number(prompt("Enter a number"))

  // console.log("written test score is "+writtenTest);
  // console.log("lab exam score is "+labExam);
  // console.log("assignment test score is "+assignment);
 
  // const weightedAverage=(writtenTest,labExam,assignment)=>{
  //    var overAllgrade=((writtenTest*70)/100 + (labExam*20)/100 + (assignment*10)/100)
  //    console.log("The overall grade is "+overAllgrade)
  // }
  // weightedAverage(writtenTest,labExam,assignment)

  // const annualIncome=Number(prompt("Enter the annual income"))
  // console.log("Annual income is "+annualIncome);
  
  // function findIncomeTax(annualIncome){
  //     if(annualIncome>=1000000){
  //       let incomeTax=(annualIncome*30)/100;
  //       console.log("Income tax amout is "+incomeTax)
  //     }
  //     else if(annualIncome>=500000 && annualIncome<1000000){
  //       let incomeTax=(annualIncome*20)/100;
  //       console.log("Income tax amout is "+incomeTax)
  //     }
  //     else if(annualIncome>=250000 && annualIncome<500000){
  //       let incomeTax=(annualIncome*5)/100;
  //       console.log("Income tax amout is "+incomeTax)
  //     }else{
  //         console.log("No Tax")
  //     }
  // }
  // findIncomeTax(annualIncome);

  // var n=4;
  // var p=1;
  // for(var i=1;i<=n;i++){
  //   var row='';
  //   for(var j=1;j<=i;j++){
  //     row=row+p+"   ";
  //     p=p+1;
  //   }
  //   console.log(row);
  // }


 //variable hoisting

// console.log(x);
// let x=3;           
// console.log(x)

//nameless funcitons

// const myFunc=function(){
//   console.log("jithin")
// }
// myFunc()

// const sum=function(a,b){
//    return a+b
// }
// function abc(x){
  //  console.log(sum(10,20))
  // const k=x(10,20)
  // return k;
// }
// console.log(sum(10,20))
// console.log(abc(sum))


// const sum=function(a,b){
  // return a+b
// }
// function abc(x){
 //  console.log(sum(10,20))
//  const k=x
//  return k;
    // return x
// }
// console.log(sum(10,20))
// console.log(abc(sum(10,20)))

// closure

// var obj=new abc();
// obj.set(10,20);

// const upperCase=()=>{
//   var x=document.getElementById('fname')
//   x.value=x.value.toUpperCase();
// }
// document.getElementById('btn').addEventListener("click",function(){
//   Myfunc(10,20)
// })
// document.getElementById('btn').addEventListener("mouseover",function(){
//   document.getElementById('btn').innerHTML="you can click"
// })
// document.getElementById('btn').addEventListener("mouseout",function(){
//   document.getElementById('btn').innerHTML="click me"
// })
// const Myfunc=(a,b)=>{
//    document.getElementById('demp').innerHTML=a+b;
// }

// var a=document.getElementById('fname')
// const clikedBtn=()=>{
//    document.getElementById('demp').innerHTML=a.value;
// }
// document.getElementById('btn').addEventListener("click",clikedBtn)

// var heading=document.createElement('h1')
// document.getElementById('btn').addEventListener('click',function(){
//    heading.innerHTML="Hello world"
//    document.body.appendChild(heading)
// })
// document.getElementById('btn2').addEventListener('click',function(){
//   heading.remove();
// })

class Person{
   constructor(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
   }
   getName(){
     document.write("The name of the person is "+this.name);
   }
}
const obj=new Person();
const obj1=new Person("arun",30,"kannur");
const obj2=new Person("krishnan",30,"kannur");
obj.name="kiran workey"
obj.getName();
obj1.getName();
obj2.getName();