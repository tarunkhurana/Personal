/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
import * as Math from "./Math";
import Animal,{CLASSNAME} from "./Animal";
import Immutable from "immutable";

/* your imports */
logTitle('Title');
/* coding examples */
log("Hello World");
log(Math.add(2,3));

let animal=new Animal();
log(animal.getClassType());
log(CLASSNAME);

for(let i=0; i<10; i++){
    log(i);
}
//log(i);

// SPREAD OPERATORS
const name="tarun";
const numbers=[1,2,3];
function add(n1,n2,n3){
    return n1+n2+n3;
}

function myFunction(v, w, x, y, z) { 
    console.log(z);
    return v+w+x+y+z;
}
var args = [0, 1];


log(myFunction(-1, ...args, ...[3,2]));

var a = [[1], [2], [3]];
var b = [...a];
b.shift();
console.log(b);
console.log(a);

var obj = {'key1': 'value1'};
var array = [{...obj}]; 
console.log(array);

function f(...abc) {
    console.log(abc);
    const [a,b,c]=[...abc];
    return a + b + c;
  }
  
  log(f(1))          // NaN (b and c are undefined)
  log(f(1, 2, 3))    // 6
  f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)

  var person1={
      name:"tarun",
      profile:{
          age:20,
          experience:2
      }
  };
  var person2={...person1};
  person2.profile.age=23;
  log(person1.profile.age);

  // ENHANCED OBJECT PROPERTIES
  const PRICEPROPERTY="PRICE";

  const calculator=(name,price)=>{
      return{
          name,
          add(n1,n2){
              return n1+n2;
          },
          [PRICEPROPERTY.toLowerCase()]:price
      }
  };

  const calc=calculator("calculator",20);
  log(calc.name);
  log(calc.add(43,3));
  log(calc[PRICEPROPERTY.toLowerCase()])

  // DESTRUCTING ARRAY ON ASSIGMENTS

  const names = ['anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
  const [Anna, , joe,...rest] = names;
  log(`${Anna}  ${joe} ${rest}`);

  var a,b,rest1;
  [a,b]=[10,20];
  console.log(a);
  console.log(b);

  [a,b,...rest1]=[10,20,30,40];
  console.log(a);
  console.log(b);
  console.log(rest1);

  ({a,b}={a:20,b:30});
  console.log(a);
  console.log(b);

  [a=5, b=7] = [1];
  console.log(a); // 1
  console.log(b); // 7

// Stage 3 proposal
 // ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});

 //DESTRUCTING OBJECTS

 const getUser = () => {
    return {
      firstName: 'John',
      surname: 'Doe',
      gender: 'male',
      address: {
        country: 'United States',
        city: 'California',
        postCode: 'CA',
        fullAddress: {
          doorNumber: 22,
          street: 'LA st'
        }
      },
      age: 29
    }
  };
  
  const user = getUser();
  
//   const name = user.name;
//   const age = user.age;
  //const country = user.address.country;
 // const doorNumber = user.address.fullAddress.doorNumber;
  const {firstName="Tarun",age, address:{country:theCountry, fullAddress:{doorNumber}}}=user;
  
  log(firstName);
  log(age);
  log(theCountry);
  log(doorNumber);

  // Function Default Parameters

  const calculatePay=(yearSalary,bonus={teamBonus:0,employeeBonus:0})=>{
      console.log(bonus);
      return yearSalary+bonus.teamBonus+bonus.employeeBonus;
  }

  log(calculatePay(90000,{teamBonus:1000}))

  // ES6 Classes
  class Human{
      constructor(name){
          this.name=name;
          log(`${name} class was created`)
      }
      static iAmStatic(){
          log(`I am static`);
      }
      eat(){
          log(`${this.name} is eating`)
      }
  }

  class Male extends Human{
      constructor(name, sex){
          super(name);
          this.sex=sex;
      }
      display(){
        log(`${this.sex}`)
      }
      eat(){
          super.eat();
      }
  }

  Human.iAmStatic();


  var akki=new Human("Akki");
  akki.eat();

  var tarun=new Male("Tarun","M");
  tarun.display();

  // Promise
  var promise=new Promise((resolve,reject)=>{
      setTimeout(function(){
        resolve("Data back from server..........")
      },6000);
      setTimeout(function(){
        reject("Server Error.....")
      },1000);
  });

  promise.then(res=>{
     log(res);
  }).catch(error=>{
    log(error);
  });

  var firstNamesPromise=new Promise((resolve,reject)=>{
         setTimeout(function(){
             resolve(["Tarun","Ankush"]);
         },3000)
         setTimeout(function(){
            reject("Server Error...");
        },5000)
  });

  var lastNamesPromise=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve(["Khurana","Khurana"]);
    },3000)
    setTimeout(function(){
       reject("Server Error...");
   },5000)
});

Promise.all([firstNamesPromise,lastNamesPromise]).then(data=>{
    const [firstNames,lastNames]=data;
  log(firstNames);
  log(lastNames);
}).catch((error)=>{
    log(error);
})

const getRandomUsers=n=>{
    const fetchRandomUsers=fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUsers.then(data=>{
        data.json().then(users=>{
           users.results.forEach((user)=>{
               const {gender,email}=user;
               log(`${gender}-${email}`);
           })
        })
    })
}
getRandomUsers(20);


//GENERATORS
const getNumbers=function* (){
    yield 1;
    yield "hello";
    yield true;
    yield {name:"Tarun"}
    return "done"
}

const n=getNumbers();
log(n.next().value);
log(n.next().value);
log(n.next().value);
log(n.next().value);
log(n.next().value);

const readNumbers=function* (numbers){
    for(let i=0; i<numbers.length;i++){
        yield numbers[i];
    }
}

const rn=readNumbers([1,2,3,4,5]);

const interval=setInterval(function(){
  const next=rn.next();
  if(next.done){
      log("This generator is done");
      clearInterval(interval)
  } else{
      log(next.value);
  }
},1000);

const mutableObj={
    name:"tarun",
    age:20
};
// To convert an  Object or Array to immutable map or list
const immutableObj=Immutable.fromJS(mutableObj, (key,value)=>{
    log(`key:${key}:value:${value}`)
});
immutableObj.set

immutableObj.name="anky";
log(`mutable:${mutableObj.name}`);
log(`immutable:${immutableObj.name}`);