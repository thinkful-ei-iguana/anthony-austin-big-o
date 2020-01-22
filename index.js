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

const stackA = new Stack()
const stackB = new Stack()
const stackC = new Stack()

let i = 3;
for(let t = i; t > 0; t--) {
    stackA.push(t)
}
console.log(runHanoi(i, stackA, stackB, stackC))

function runHanoi(z, a, b, c) {

    if(z==1) {
        move(a,b)
        num++
    } else {
        runHanoi(z -1, a, c, b);
        move(a,b);
        num++;

        runHanoi(z-1, c, b, a)
    }
}

function move(a, b) {
    b.push(a.pop().content);
}


//12  1-- O(1)

//12  2-- O(n)

//12  3-- O(1)

//12  4-- O(n)

//12  5-- O(n)

//12  6-- O(1)

//12  7-- O(1)


//13 -- 



