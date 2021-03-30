// var message = 'Учимся 2'
// console.log(message);
// let sayHello='Hello again'
// console.log(sayHello);
/*
Number
String
Boolean
Object
Null
Undefined
*/
// let huj=42
// let string='Message'
// let isTrue=true // false
// let obj={a: 1}
// let isNull=null
// let undef=undefined

// console.log(typeof undef)
// let num1=11
// let num2=8
// console.log('+', num1+num2)
// console.log('*', num1*num2)
// console.log('+', num1/num2)
// let str='Hello'
// let str2='World'
// console.log('+:', str+' '+str2)
// console.log('1+2', 1+'2')
// console.log('str+num1', str+num1)
// console.log('true+1', true+1)

// let result=12-6/3
// let result2=3+4*3
// let isGreater=20-6*3>=4
// let isGreater2=20-6*3>=1
// //            3  13 1411
// console.log('result', result)
// console.log('result', result2)
// console.log('isGreater', isGreater)
// // console.log('isGreater', isGreater2)
// console.log('5%2',5%2)
// console.log('8%3',8%3)
// let i=1
// i--
// // i=i-1
// console.log('i',i)
// i+=3
// console.log('i',i)

// console.log('3<2', 3 < 2)
// console.log('4==4', 4 == 4)
// console.log('4==5', 4 == 5)
// console.log('4!=4', 4 != 4)
// console.log('4===4', 4 === 4)
// console.log('4===4', 4 === '4')
// console.log('4==4', 4 == '4')
// console.log(true && true)
// console.log(true || false)
// console.log(false || false)
// console.log(!false)
// console.log((false && true) || (true || false) || !true)

// let carName = 'Ford'
// let carYear = 2014
// let carAge = 2018 - carYear
// // если возраст машины <5...
// // если в.м. больше или равно 5 лет и меньше или равно 10 лет...
// // иначе другое сообщение

// if (carAge < 5) {
//   console.log('У Вас новая машина ' + carName)
// } else if (carAge >= 5 && carAge <= 10) {
//   console.log('Ваша машина ' + carName + ' не первой свежести')
// }
// else {
//   console.log('Барохло')
// }
// if (4) {
//   console.log('Значение true')

// }
// else {
//   console.log('false')
// }
// let personAge=28;
// let message=personAge<18 
// ? "Человек не дорос" 
// :"Совершеннолетний"
// console.log(message)

 let carColor='yellow'
// if (carColor==="green") {
//   console.log('Цвет машины зеленый')
// }
// else if (carColor==='yellow') {
//   console.log("Цвет машины желтый ")}
//   else if (carColor==='pink') {
//     console.log ('Цвет машины розовый')
//   }
// else {console.log ('Цвет машины красный')}

// switch (carColor) {
//   case 'green':
//     console.log('Цвет машины зеленый')
//     break 
//     case 'yellow':
//       console.log("Цвет машины желтый ")
//       break
//       default :
//       console.log("Цвет машины не определен ")
// }
let carName='Ford'
let carYear=2010
let personYear=1990
function calcAge (year) {
  let currentYear=2018
  let result=currentYear-year
  return result
}
function checkAndLogAge (year) {
  if (calcAge(year)<10) {
    console.log('Возраст меньше 10 лет')
  } 
  else {console.log ('Возраст больше 10 лет')} 
}

checkAndLogAge(carYear)
checkAndLogAge(personYear)
let str1='hello world'
let str2='hello world 2'
let personName='Виктор'
let message='Человека зовут "'+personName+'"'
console.log(message)