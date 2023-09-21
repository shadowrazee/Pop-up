//zadanie 4
// console.log(typeof 'hello') //string
// console.log(typeof 10) //number
// console.log(typeof {}) // object
// console.log(typeof null) // object
// console.log(typeof undefined) // undefined
// console.log(typeof true) // boolean
// console.log(typeof []) // object
// console.log(typeof (() => {})   ) // function 


// let theNumber = Number (prompt('vvedite jislo'));
// if (!Number.isNaN(theNumber)){
//     console.log('это число является квадратным корнем из ' + theNumber* theNumber)
// }else{
//     console.log('NAN')
// }


switch(prompt("kakazy pogoda!")){
case ' rain':
    console.log('zont vozimi');
    break;
case ' sun':
    console.log('poxyu');
    
case ' foggy':
    console.log('jlen');
    break;
 default:
    console.log('ne eby');
    break;
}