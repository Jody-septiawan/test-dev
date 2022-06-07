// Program ini dapat dijalankan pada Web Browser
// atau menggunakan Node Js

console.clear();

// Number 1
const patternDeret = (len) => {
  const abjad = 'ABCDEFGHIJKLMNOPQRSTUVWQYZ';
  const arrAbjad = abjad.split('');

  for (let i = len; i != 0; i--) {
    let s = '';
    for (let j = 0; j < i; j++) {
      s += `${arrAbjad[j]} `;
    }
    console.log(s);
  }
};

patternDeret(10);

// Number 2
const patternNumber = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  arr.forEach((item) => {
    let len = arr.length - 1;
    let temp = arr[0];
    arr.shift();

    arr[len] = temp;

    let sNum = '';

    arr.forEach((n) => {
      sNum += `${n} `;
    });

    console.log(sNum);
  });
};

patternNumber(5, 10);
