//------starter file------
//1 -- pt1 -- O(n)  pt2 -- O(n)

//2 -- O(1)

// 3 --  O(n^2)

// 4 --  O(n)

//5 -- O(n)

//6 -- O(n^2)

//7 -- O(2^n)

//8 -- O(log(n)) --Some fraction of the remaining input is processed in each iteration of a logarithmic algorithm

//9 -- O(1)

//10 -- O(n)

//11 --
// const hanoi = (disc, src, aux, dst) => {
//   if (disc > 0) {
//     hanoi(disc - 1, src, dst, aux);
//     console.log(`Move disc ${disc} from ${src} to ${dst}`);
//     hanoi(disc - 1, aux, src, dst);
//   }
// };

// hanoi(2, 'Rod A', 'Rod B', 'Rod C');



//12 --

// function countSheep(num) {
//     for ( i = 1; i <= num; i++) {
//         console.log(`another sheep jumps over the fence`)
//         if( i === num) {
//             console.log("all sheep have jumped over the fence")
//         }
//     }
// }
// console.log(countSheep(3));


// function powerCalc(n, x) {
//     let p=1;
//     for (let i=0; i<x; i++) {
//         p*=n;
//     }
//     return p;
// }
// console.log(powerCalc(2,4))


// function reverse(str) {
//     let rev = '';
//     for(let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }
//     return rev;
// }

// console.log(reverse('hello world'));

// function triangle(n) {
//     let total = 0;
//     for (let i=0; i<n; i++) {
//         total += i
//     }
//     let firstNum = 2*total+1

//     for (let j=0; j>n; j++) {
//         sum += firstNum
//         firstNum += 2
//     }
//     return n*n*n
// }

// console.log(triangle(3))

 
// const stringSplitter = (string, seperator) => {
//     let result = []; let newStr = '';
//         for (let i of string) { 
//             if (i === seperator) { 
//             result.push(newStr); 
//             newStr = ''; 
//         } else { 
//             newStr = newStr + i; 
//         }
//      } 
//      result.push(newStr); return result; };

// console.log(stringSplitter('01/22/2020', '/'));

// const fibonacci = num => { 
//     let result = []; 
//     for (let i = 0; i < num; i++) { 
//         if (i < 2) { result.push(1);
//          } else { 
//              result.push(result[i - 1] + result[i - 2]); 
//             } 
//         } 
//         return result; 
//     };

// console.log(fibonacci(8));


// const factoral = num => { 
//     let result = 1; 
//     for (let i = 1; i <= num; i++) { 
//         result = result * i; 
//     } 
//     return result; 
// };

// console.log(factoral(10));


//13  1-- O(1)

//13  2-- O(n)

//13  3-- O(1)

//13  4-- O(2^n)

//13  5-- O(n)

//13  6-- O(1)

//13  7-- O(1)


//14 1 -- O(n)

//14 2 -- O(n)

//14 3 -- O(n)

//14 4 -- O(n)

//14 5 -- O(n) 

//14 6 -- O(n)

//14 7 -- O(n)