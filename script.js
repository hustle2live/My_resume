// const textInput = document.getElementById('text-input');
// const checkButton = document.getElementById('check-btn');
// const resultElement = document.getElementById('result');

// const word = textInput.ariaValueMax;

const regExp = /[\s)(\/\\ .,_-]/gi;
let out = '';

const isThereApalimdrome = () => {
   const el = textInput.value;
   if (!el) return alert('Please input a value');

   const elem = el.replace(regExp, '').toLowerCase();
   const reverseElem = [...elem].reverse().join('');

   console.log(elem);
   console.log(reverseElem);

   out = elem === reverseElem ? ' is a palindrome' : ' is not a palindrome';
   return (resultElement.innerText = textInput.value + out);
};

// checkButton.addEventListener('click', () => isThereApalimdrome(textInput));

const sumElem = (arr) => (!arr.length ? 0 : arr.shift() + sumElem(arr));

// console.log(sumElem([1, 2, 3, 1]));
// console.log([1, 2, 3, 1].sort);

const sumElem2 = (arr) => (!arr.length ? 0 : arr.pop() + sumElem(arr));

const sumElem1 = (arr, i = 0) => {
   if (i >= arr.length) {
      return 0;
   } else {
      return arr[i] + sumElem(arr, i + 1);
   }
};

// ------------------- freeCodeCamp Algorithms

function sumAll(arr) {
   const [a, b] = [...arr];
   if (a === b) return a;
   else return a + (a < b ? sumAll([a + 1, b]) : sumAll([a - 1, b]));
}

// console.log(typeof sumAll([1, 4])); // should return a number.
// console.log(sumAll([1, 4])); // should return 10.
// console.log(sumAll([4, 1])); // should return 10.
// console.log(sumAll([5, 10])); // should return 45.
// console.log(sumAll([10, 5])); // should return 45.

// --/ freeCodeCamp Algorithms ----------

function diffArray(arr1, arr2) {
   const newArr = [];

   for (const elem of arr1) {
      if (!arr2.includes(elem)) newArr.push(elem);
      else arr2 = arr2.filter((el) => el !== elem);
   }

   // or
   // for (const elem of arr1) !arr2.includes(elem) ? newArr.push(elem) : (arr2 = arr2.filter((el) => el !== elem));

   return [...newArr, ...arr2];
}

function diffArray1(arr1, arr2) {
   const newArr = [];

   for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
         newArr.push(arr1[i]);
      } else if (arr2.includes(arr1[i])) {
         arr2 = arr2.filter((el) => el !== arr1[i]);
      }
   }

   return [...newArr, ...arr2].sort();
}

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function uniteUnique1(arr) {
   const arr2 = Array.from(
      new Set(
         [...arguments].reduce((acc = [], arr) => (acc = [...acc, ...arr])),
         []
      )
   );
   return arr2;
}

function uniteUnique(arr) {
   const arr2 = [...arguments].reduce((acc, arr) => [...acc, ...arr]);
   const newArr = arr2.reduce((acc = [], el) => (acc.includes(el) ? acc : [...acc, el]), []);
   return newArr;

   // for (const el of arr2) {
   //    const element = arr2.shift();
   //    console.log(element);
   //    if (!arr2.includes(element)) newArr.push(element);
   // }

   // return newArr;
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function convertToRoman(num) {
   const arr = [...num.toString()];

   const sheets = [
      { 9: 'IX', 8: 'VIII', 7: 'VII', 6: 'VI', 5: 'V', 4: 'IV', 3: 'III', 2: 'II', 1: 'I', 0: null },
      { 0: null, 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC', 1: 'X' },
      { 0: null, 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' },
      { 0: null, 1: 'M', 2: 'MM', 3: 'MMM' }
   ];

   let romalIndex = 0;
   let romal = '';

   for (let i = arr.length - 1; i >= 0; i--) {
      if (romalIndex > 3) romalIndex = 0;
      const numb = arr[i];
      const romalNumb = sheets[romalIndex][numb] || '';
      if (romalNumb) romal = romalNumb.concat(romal);
      romalIndex = romalIndex + 1;
   }

   return romal;
}

// convertToRoman(2); //  should return the string II.
// convertToRoman(3); // should return the string III.
// convertToRoman(4); //  should return the string IV.
// convertToRoman(5); // should return the string V.
// convertToRoman(9); //  should return the string IX.
// convertToRoman(12); // should return the string XII.
// convertToRoman(16); // should return the string XVI.
// convertToRoman(29); // should return the string XXIX.
// convertToRoman(44); //  should return the string XLIV.
// convertToRoman(45); // should return the string XLV.
// convertToRoman(68); // should return the string LXVIII
// convertToRoman(83); //  should return the string LXXXIII
// convertToRoman(97); // should return the string XCVII
// convertToRoman(99); // should return the string XCIX
// convertToRoman(400); //should return the string CD
// convertToRoman(500); //should return the string D
// convertToRoman(501); //should return the string DI

// console.log(convertToRoman(649)); // should return the string DCXLIX
// console.log(convertToRoman(798)); // should return the string DCCXCVIII
// console.log(convertToRoman(891)); // should return the string DCCCXCI

// console.log(convertToRoman(649) === 'DCXLIX');
// console.log(convertToRoman(798) === 'DCCXCVIII');
// console.log(convertToRoman(891) === 'DCCCXCI');

// convertToRoman(1000); // should return the string M
// convertToRoman(1004); //should return the string MIV
// convertToRoman(1006); // should return the string MVI
// convertToRoman(1023); // should return the string MXXIII
// convertToRoman(2014); // should return the string MMXIV
// convertToRoman(3999); // should return the string MMMCMXCIX

function rot13Simple1Solve(str) {
   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let newLetter = '';
   let cipherSolvedStr = '';

   for (let i = 0; i < str.length; i++) {
      let letterPos = alphabet.indexOf(str[i]);

      if (letterPos < 0) newLetter = str[i];
      else {
         const newLetterIndex = letterPos + 13;
         newLetter = newLetterIndex > 25 ? alphabet[newLetterIndex - 26] : alphabet[newLetterIndex];
      }

      cipherSolvedStr += newLetter;
   }

   return cipherSolvedStr;
}

// Caesars Cipher Task
function rot13(str, i = 0, out = '') {
   if (i >= str.length) return '';

   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      maxIndex = alphabet.length - 1,
      cipherShift = Math.ceil(maxIndex / 2),
      $_$SsP_ = (num) => (num += cipherShift),
      P_sP_ = (num) => alphabet[num - alphabet.length],
      charPos = (q) => alphabet.indexOf(str[q]);

   out = !(charPos(i) < 0)
      ? $_$SsP_(charPos(i)) > maxIndex
         ? P_sP_($_$SsP_(charPos(i)))
         : alphabet[$_$SsP_(charPos(i))]
      : str[i];

   return (out += rot13(str, i + 1));
}

// console.log(rot13('SERR PBQR PNZC')); // FREE CODE CAMP

function telephoneCheck(str) {
   const re = /^[1]?([\s])?([)(5-9]{5})?\s?(\d{3}[ -]?)+\d{4}/g;
   const minLength = 10;
   if (str.length < minLength) return false;
   if (str[0] != 1 && str[0] != 5 && str[0] != '(') return false;
   if (!re.test(str)) return false;

   return true;
}

// console.log(telephoneCheck('1(555)555-5555'));

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.

function checkCashRegister(price, cash, cid) {
   const billsTable = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      'ONE HUNDRED': 100
   };

   const changeToGive = +(cash - price).toFixed(2);
   const cidAmount = +cid.reduce((acc, item) => (acc = acc + item[1]), 0).toFixed(2);
   const drawerBlow = changeToGive > cidAmount;
   const fillCid = cid.filter((key) => key[1] > 0);
   const changeInDrawer = [];
   const change = {};
   change.status = 'OPEN';
   change.change = changeInDrawer;

   if (drawerBlow) {
      change.status = 'INSUFFICIENT_FUNDS';
      return change;
   } else if (changeToGive === cidAmount) {
      change.status = 'CLOSED';
      change.change = cid;
      return change;
   }

   let tempSumToGive = changeToGive;
   let rest = 0;

   const changeTheDrawer = (tempSum, idx, takeAmount) => {
      const billName = fillCid[idx][0];
      const billAmount = fillCid[idx][1];

      fillCid[idx][1] = billAmount - takeAmount;
      tempSumToGive = +(tempSum - takeAmount).toFixed(2);
      rest = +(rest + takeAmount).toFixed(2);

      changeInDrawer.push([billName, takeAmount]);
      return tempSumToGive;
   };

   for (let i = fillCid.length - 1; i >= 0; i--) {
      if (tempSumToGive === 0) break;

      const billName = fillCid[i][0];
      const billAmount = fillCid[i][1];

      const changeLessThanBill = tempSumToGive < billsTable[billName];
      const mayTakeAllTheBill = tempSumToGive >= billAmount;
      const mayTakeButNotAllBill = tempSumToGive < billAmount;

      if (changeLessThanBill) continue;
      else if (mayTakeAllTheBill) {
         changeTheDrawer(tempSumToGive, i, billAmount);
      } else if (mayTakeButNotAllBill) {
         const multiplier = Math.floor(tempSumToGive / billsTable[billName]);
         const maxAmountToTake = billsTable[billName] * multiplier;

         changeTheDrawer(tempSumToGive, i, maxAmountToTake);
      }
   }

   if (tempSumToGive === 0 && rest === changeToGive) {
      change.status = 'OPEN';
   } else if (rest < changeToGive) {
      changeInDrawer.length = 0;
      change.status = 'INSUFFICIENT_FUNDS';
   } else if (cidAmount <= 0) {
      change.status = 'CLOSED';
   }

   return change;
}

// running tests
// console.log(
//    checkCashRegister(19.5, 20, [
//       ['PENNY', 1.01],
//       ['NICKEL', 2.05],
//       ['DIME', 3.1],
//       ['QUARTER', 4.25],
//       ['ONE', 90],
//       ['FIVE', 55],
//       ['TEN', 20],
//       ['TWENTY', 60],
//       ['ONE HUNDRED', 100]
//    ])
// );

// console.log(
//    checkCashRegister(19.5, 20, [
//       ['PENNY', 1.01],
//       ['NICKEL', 2.05],
//       ['DIME', 3.1],
//       ['QUARTER', 4.25],
//       ['ONE', 90],
//       ['FIVE', 55],
//       ['TEN', 20],
//       ['TWENTY', 60],
//       ['ONE HUNDRED', 100]
//    ]) == { status: 'OPEN', change: [['QUARTER', 0.5]] }
// );

// console.log(
//    checkCashRegister(3.26, 100, [
//       ['PENNY', 1.01],
//       ['NICKEL', 2.05],
//       ['DIME', 3.1],
//       ['QUARTER', 4.25],
//       ['ONE', 90],
//       ['FIVE', 55],
//       ['TEN', 20],
//       ['TWENTY', 60],
//       ['ONE HUNDRED', 100]
//    ]) ==
//       {
//          status: 'OPEN',
//          change: [
//             ['TWENTY', 60],
//             ['TEN', 20],
//             ['FIVE', 15],
//             ['ONE', 1],
//             ['QUARTER', 0.5],
//             ['DIME', 0.2],
//             ['PENNY', 0.04]
//          ]
//       }
// );

// console.log(
//    checkCashRegister(19.5, 20, [
//       ['PENNY', 0.5],
//       ['NICKEL', 0],
//       ['DIME', 0],
//       ['QUARTER', 0],
//       ['ONE', 0],
//       ['FIVE', 0],
//       ['TEN', 0],
//       ['TWENTY', 0],
//       ['ONE HUNDRED', 0]
//    ]) ==
//       {
//          status: 'CLOSED',
//          change: [
//             ['PENNY', 0.5],
//             ['NICKEL', 0],
//             ['DIME', 0],
//             ['QUARTER', 0],
//             ['ONE', 0],
//             ['FIVE', 0],
//             ['TEN', 0],
//             ['TWENTY', 0],
//             ['ONE HUNDRED', 0]
//          ]
//       }
// );
// tests completed



function go(a, b) {
   this.a = a;
   this.b = b;
}

go.prototype.sum = () =>    {
   return  this.a + this.b
}


class Go(a, b) {
   constructor() {
      this.a = a;
      this.b = b
   }

   sum () {
      return  this.a + this.b
   }
}


const go1 = new go(11,12) // {a: 11, b:12}
const go2 = new go(44, 55) // {a: 44, b: 55}

