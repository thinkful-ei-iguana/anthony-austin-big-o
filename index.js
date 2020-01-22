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
const hanoi = (disc, src, aux, dst) => {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log(`Move disc ${disc} from ${src} to ${dst}`);
    hanoi(disc - 1, aux, src, dst);
  }
};

hanoi(2, 'Rod A', 'Rod B', 'Rod C');

//12  1-- O(1)

//12  2-- O(n)

//12  3-- O(1)

//12  4-- O(n)

//12  5-- O(n)

//12  6-- O(1)

//12  7-- O(1)

//13 --
