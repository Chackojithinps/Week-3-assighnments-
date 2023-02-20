// const Person={
//     firstName:"jithin",
//     lastName:"chacko",
//     fullName:function(city,place){
//         return `${this.firstName} ${this.lastName} lives in ${city},${place}`;
//     }

// }
// console.log(Person.fullName("naduvil","kannur"));

// const Person1={
//     firstName:"arun",
//     lastName:"kkk"
// }
// console.log(Person.fullName.call(Person1,"Manjeri","Malappuram"))

// const Person={
//     firstName:"jithin",
//     lastName:"chacko",
//     fullName:function(city,place){
//         return `${this.firstName} ${this.lastName} lives in ${city},${place}`;
//     }

// }
// console.log(Person.fullName("naduvil","kannur"));

// const Person1={
//     firstName:"arun",
//     lastName:"kkk"
// }
// console.log(Person.fullName.apply(Person1,["Manjeri","Malappuram"]))

// const Person={
//     firstName:"jithin",
//     lastName:"chacko",
//     fullName:function(){
//         return `${this.firstName} ${this.lastName}`;
//     }

// }
// console.log(Person.fullName("naduvil","kannur"));

// const Person1={
//     firstName:"arun",
//     lastName:"kkk"
// }
// console.log(Person.fullName.bind(Person1))

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
 const fullName=person.fullName.bind(member);
 console.log(fullName())