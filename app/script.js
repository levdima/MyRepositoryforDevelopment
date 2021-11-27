//submit homework to the repository that you created for git lecture 



// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64
// let num = +prompt('input number');
// let degree = +prompt('input degree');
// const numberToDegree = (num, degree) => {
//     return degree === 1 ? num : num * numberToDegree(num, degree - 1)
// }
// console.log(numberToDegree(num, degree))

// 2. Write functions min and max that will find min and max number in array using apply


// let fimdMax = (num) => {
//     let arr = new Array(num);
//     let newArr = [];

//     for (let i = 0; i < num; i++) {
//         arr[i] = +prompt('input array elements');
//         newArr.push(arr[i])
//     }

//     let max = Math.max.apply(null, newArr);
//     let min = Math.min.apply(null, newArr);
//     console.log(`Max element = ${max}  Min element = ${min}`)
// }
// let num = +prompt('input length of Array');
// fimdMax(num)

// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars

// let displayCarDetails = (ownerName) => {
//     let a = "";
//     let arr = [];
//     for (let value in ownerName) {
//         for (let key in ownerName[value]) {
//             a += ownerName[value][key] + " ";
//         }
//         arr.push(a);
//         a = "";
//     }
//     return arr;
// }

// let info = displayCarDetails([{
//     number: 132,
//     branch: 30,
//     color: 'black'
// }, {
//     number: 32,
//     branch: 30,
//     color: 'black'
// }, {
//     number: 12,
//     branch: 30,
//     color: 'black'
// }, ])
// console.log(info)

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 

// function greet(person) {
//     if (person.name == 'amy') {
//         return 'hey amy'
//     } else {
//         return 'hey arnold'
//     }
// }
// const amy = { name: 'amy' }
// let p = greet(amy);
// console.log(p);

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)
for (let i = 0; i < 4; ++i) {
    setTimeout(() => { console.log(i); }, 1000 * i)
}
for (var i = 0; i < 4; ++i) {
    do_alert(i);
}

function do_alert(num) {
    setTimeout(function() {
        console.log(num);
    }, 1000 * num);
}