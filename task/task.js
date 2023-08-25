str='Good news! Your identity has been confirmed. Your username is shown below. To change it, go to the Account Dashboard → Account Details after logging in.'
const split=str.split(' ')
// console.log(split)
const slice1 =split.slice(0,18)
// console.log(slice1)
const slice2 =split.slice(18,23)
// console.log(slice2)
const slice3 =split.slice(23)
// console.log(slice3)

const result = slice1.join(' ')+slice2.join(' ')+slice3.join(' ');
console.log(result)