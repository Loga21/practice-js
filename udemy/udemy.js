// var result = document.getElementById('result');

// var a = 5;
// var b = 3;
// const sum = () => {
//   //   result.innerHTML = a + b;
//   return a + b;
// };
// console.log(sum(a,b))

// function subtract(a = 12, b = 10) {
//   return a - b;
// }
// const subtract =  (a, b)=>{
//     return a-b;
// }
// function stringify(){
//     return `"Result": `+subtract(12,5);
// }
// console.log(stringify())

// const double = (a) => {
//   return a + a;
// };

// function transform(b = 10) {
//   return double(10);
// }

// console.log(double(10));

// var array = [1,4,3];
// array.push(8);
// array.push(2);

// console.log(array);

// function callMe() {
//     console.log('Called!');
// }
// function solve() {
//     for(let i=0; i<100; i++){
//       callMe()
//     }
// }
// solve()

//error handling

// try {
//   console.log('starting of try block');
//   data;
//   console.log('end of try block');
// } catch (err) {
//   console.log('Error occured:' + err);
// } finally {
//   console.log('hi');
// }
// let value = '{"age":30}';
// try {
//   let user = JSON.parse(value);
//   if (!user.name) {
//     throw new SyntaxError('Incomplete data: no name');
//   }
// } catch (err) {
//   console.log('JSON Error:' + err);
// }
