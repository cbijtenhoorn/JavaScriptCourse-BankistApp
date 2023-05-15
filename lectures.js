console.log('-------------------------------');
console.log('CONVERTING AND CHECKING NUMBERS');
console.log('-------------------------------');

// In JavaScrip all numbers are (secretly) decimals.
console.log(23 === 23.0); // true
console.log(0.2 + 0.1 === 0.3); // false, it's 0.30000000000000004 because of dumb bug

// Conversion
console.log(Number('23'));
console.log(+'23'); //with a plus it does type cohersion and makes it a number.

// Parsing
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e30')); // NaN, has to start with a number

console.log(Number.parseInt('    2.5rem ')); // 2
console.log(Number.parseFloat('    2.5rem ')); //2.5

// Check is value is NaN
console.log(Number.isNaN(20)); // false. It's not-not a a number
console.log(Number.isNaN(+'20X')); // true, it's a string
console.log(Number.isNaN(23 / 0)); // false, it's 'Infinity'

// Superior to checking if value is a number.
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false, it's a string
console.log(Number.isFinite(+'20X')); // false, it's NaN
console.log(Number.isFinite(20 / 0)); // false, it's finite

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.3)); // false, it's a float

console.log('-----------------');
console.log('MATH AND ROUNDING');
console.log('-----------------');

console.log(Math.sqrt(24));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN
console.log(Math.max(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
console.log((2.7).toFixed(0)); // 3 -> toFixed returns a string
console.log((2.7).toFixed(3)); // 3.700
console.log((2.345).toFixed(2)); // 2.35

console.log('----------------------');
console.log('THE REMAINDER OPERATOR');
console.log('----------------------');

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(7 % 2); // 1

const isEven = number => number % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
/*
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
    if (i % 3 === 0) {
      row.style.backgroundColor = 'blue';
    }
  });
});
*/

console.log('-----------------');
console.log('NUMERIC SEPERATOR');
console.log('-----------------');

// 287,460,000,000
const diameter = 287460000000;
const diameterSeperated = 287_460_000_000;
console.log(diameter);
console.log(diameterSeperated);

const price = 345_99;

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;

console.log('-------------------');
console.log('WORKING WITH BIGINT');
console.log('-------------------');

console.log(2 ** 53 - 1); // 9007199254740991 biggest int that's safely possible in JavaScript. integers higher than that might have bugs.
console.log(Number.MAX_SAFE_INTEGER);

console.log(236543862547863257352925329835249235493254372548n); // bigInt! Use it for LARGE numbers

// Operations
console.log(10000n + 10000n);
console.log(76527862375637256783265n * 10000000000n);

console.log('-----------');
console.log('CREATE DATE');
console.log('-----------');

const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

// console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5)); // the month in Javascript is zero-based, so november = 10.

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // zero-based
console.log(future.getDate()); // day
console.log(future.getDay()); //
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // gets timestamp since 1 jan 1970

console.log(new Date(2142253380000));
console.log(Date.now()); // gives current timestamp

future.setDate(2040);
console.log(future);

console.log('---------------------');
console.log('OPERATIONS WITH DATES');
console.log('---------------------');

const futuredate = new Date(2037, 10, 19, 15, 23);
console.log(+futuredate);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

console.log('---------------------------------');
console.log('INTERNATIONALIZING NUMBERS (INTL)');
console.log('---------------------------------');

const num = 3884764.23;
const options = {
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  'Browser: ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);

console.log('----------------------------------');
console.log('TIMERS: SETTIMEOUT AND SETINTERVAL');
console.log('----------------------------------');

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setinterval

// setInterval(function () {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);

console.log('------------------------------');
console.log('IMPLEMENTING A COUNTDOWN TIMER');
console.log('------------------------------');
