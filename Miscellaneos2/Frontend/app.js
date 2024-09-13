// const stu1 = {
//   name:"adam",
//   age:25,
//   marks:95,
//   getMarks:function(){
//     return this.marks;
//   },
// };
// const stu2 = {
//   name:"pks",
//   age:25,
//   marks:85,
//   getMarks:function(){
//     return this.marks;
//   },
// };
// const stu3 = {
//   name:"nks",
//   age:25,
//   marks:75,
//   getMarks:function(){
//     return this.marks;
//   },
// };
//let arr1 = [1,2,3];
// let arr2 = [1,2,3];
// arr1.sayHello = () =>{
//   console.log('hello i am arr');
// };
// arr2.sayHello = () =>{
//   console.log('hello i am arr');
// };

// function PersonMaker(name,age){
//   const person ={
//     name:name,
//     age:age,
//     talk(){
//       console.log(`hi, my name is ${this.name}`);
//     },
//   };
//   return person;
// }

//constructer - doesn't return anything & start with captial
// function Person(name,age){
//    this.name = name;
//    this.age = age;
//    console.log(this);
// }
// Person.prototype.talk = function(){
//   console.log(`Hi, my name is ${this.name}`);
// }
// let p1 = new Person("adam", 25);
// let p2 = new Person("aer", 25);

// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//    talk(){
//     console.log(`Hi, my name is ${this.name}`);
// }
// }
// let p1 = new Person("adam", 25);
// let p2 = new Person("aer", 25);

class Person{
  constructor(name, age){
    console.log('person class constructer');
    this.name = name;
    this.age = age;
  }
  talk(){
    console.log(`Hi, my name is ${this.name}`);
}
}
class Student extends Person{
  constructor(name,age,marks){
    console.log('student class constucter');
    super(name,age);
    this.marks = marks;
  }

}
let std1 = new Student("lk",18, 99);

class Teacher extends Person{
  constructor(name,age,subj){
    console.log('teacher class constructer');
    super(name,age);
    this.subj = subj;
  }
  
}