'use strict';

// function sum () {
//     console.log (1+2+3);
// }
// sum (); // 6

// func(); // выведет '!'
// function func() {
// 	console.log('!');
// }

// function func(num) { // параметр - число
//     console.log(num **3)
// };
// func(10); // 1000
// func(5); // 125

// function func(num) {
//     if (num >= 0) {
//         console.log("+++")
//     } else {
//         console.log("---")
//     }
// }
// func(-2) // ---
// func(2) // +++

// function func(num1, num2) {
// 	console.log(num1 + num2);
// }
// func(2, 44) // 46

// function sum (n1, n2, n3) {
//     console.log(n1 + n2 + n3);
// }
// sum(10, 20, -30); // 0

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// function sum(n1, n2, n3) {
//     console.log(n1 + n2 + n3);
// }
// sum (param1, param2, param3) // задействовали переменные, сумма = 6

// function func(num = 5) { // "Необязательный параметр"
// 	console.log(num * num);
// }
// func(2); // 4
// func(3); // 9
// func(); // 25, использ необяз параметр num=5

// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3); // 5
// func(3); // 3
// func(); // 0

// function func(num) {
// 	return num ** 2;
// }
// let res = func(3);
// res = res + 1;
// console.log(res) // 10
// let res2 = func(2) + func(3);
// console.log(res2); // 13

// function res (num) {
//     return num ** 3;
// }
// console.log (res(3))

// function res (num) {
//     return Math.sqrt(num);
// }
// console.log (res(9) + res(16)); // 7

// function square(num) {
// 	return num ** 2;
// }
// function sum(num1, num2) {
// 	return num1 + num2;
// }
// let res = sum(square(2), square(3)); // Сумма квадрата числа 2 и квадрата числа 3: 
// console.log(res);

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// console.log (round(sqrt(10)))
// квадратный корень из числа 10 и округленный до 3х знаков в дробной части

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// console.log(sum (sqrt(2), sqrt(3),sqrt(4))); // cумма корней чисел 2, 3, 4
// console.log(round (sum (sqrt(2), sqrt(3),sqrt(4))) ); // округление до 3 чиел в дробной части

// function func(num) {
// 	if (num >= 0) {
// 		return '+++';
// 	} else {
// 		return '---';
// 	}
// }
// console.log(func( 3)); // выведет '+++'
// console.log(func(-3)); // выведет '---'

// function func(num) {
// 	return num;
// 	let res = num ** 2; // не выведется, т.к находится за return
// 	return res;
// }
// console.log( func(3) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }
// console.log( func(10) ); // 100
// console.log( func(-5) ); // 5

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}	
// 	return num ** 2;
// }
// console.log( func(10) ); // 100
// console.log( func(-5) ); // 5

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 	}	
// 	return sum;
// }
// let res = func();
// console.log(res); // выведет 15

// function func() {
// 	let sum = 0;	
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
// let res = func();
// console.log(res); // выведет 1, т.к цикл отработал одну итерацию

// function func(arr) {
// 	let sum = 0;	
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		// Если сумма больше или равна 10:
// 		if (sum >= 10) {
// 			return i + 1; // выходим из цикла и из функции
// 		}
// 	}
// }
// let res = func([1, 2, 3, 4, 5]);
// console.log(res);

// function func(num) {
//     var i = 1;
//     while (true) {
//         num = num / 2;
//         if (num < 10) {
//             return i; // возвращает количество итераций, чтобы выполнилось условие
//         }
//         i++;
//     }
// }
// console.log (func(100)) 

// function func(num) {
// 	if (num >= 0) {
// 		return Math.sqrt(num);
// 	} else {
// 		return 0;
// 	}
// }
// console.log(func(3));

// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }
// console.log(func(3, 4));

// function isPositive(arr) {	
// 	for (let elem of arr) {
// 		if (elem < 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log (isPositive([3, 4, 5, 2, 4])); // true
// console.log (isPositive([3, 4, 5, -2, 4])); // false

// function even (arr) {
//     for (let elem of arr) {
//         if (arr[elem] % 2 == 0) { // проверка не четность
//             return true;
//         } else {
//             return false;
//         }   
//     }
// }
// console.log (even([2, 4, 5])); // false
// console.log (even([2, 4, 8])); // true

// function same (arr) {
//     for (let elem of arr) {
//         if (arr[elem] == arr[elem + 1]) { // два значения подряд одинаковые
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log (same([1, 5, 5, 2, 6])) // true

// function func (a, b) {
//     return a > b;
// }
// console.log (func(6, 4)) // true

// function func(a, b) {
// 	return a == b;
// }
// console.log (func(4, 4)) // true

// function func(num) {
//     return num >= 0;
// }
// console.log (func(3)) // true
// console.log (func(-3)) // false

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
//         console.log (res)
// 	}
// 	return res / arr.length; // Среднее число - 4.2
// }
// console.log (sum([1, 2, 5, 6, 7]))

// function func(arr1, arr2) {
// 	let res1 = 0, res2 = 0;
// 	for (let elem of arr1) {
// 		res1 += elem;
// 	}
// 	for (let elem of arr2) {
// 		res2 += elem;
// 	}
// 	return res1 / res2;
// }
// console.log (func([2, 2, 2, 2], [1, 1, 1, 1])) // 2

// function getSum(arr) {
// 	let res = 1;	
// 	for (let elem of arr) {
// 		res *= elem;
// 	}
// 	return res;
// }
// console.log (getSum([2, 2, 2, 2]))

// function func(num1, num2) {
// 	return num1 + num2;
// }
// console.log(func(3, 4));

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// function func1(num1) {
// 	return num1;
// }
// function func2(num2) {
// 	return num2;
// }
// console.log( func1(3) + func2(4) );

// console.log(sum ([1, 2, 3, 4, 5]));
// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }

// function add(num) {
// 	if (num >= 1 && num <= 9) {
// 		return '0' + num;
// 	}
// 	return num;
// }
// console.log (add(2)) // 02

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// function getDigitsSum(num) {
// 	let arr = num.split('');
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }
// console.log(getDigitsSum(12345));
// ?????????????????????????????????

// console.log(isPrime(13)); // должен вывести true
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

// Задача №1
// function sum (arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }
// console.log (sum([1, 2, 3, 4, 5]))

// Задача №2
// function getArrDividers(num) {
// 	let arr = [];
// 	for (let i = 1; i <= 100; i++) {
// 		if (num % i == 0) {
// 			arr.push (i);
// 		}	
// 	}
// 	return arr;
// }
// console.log (getArrDividers(80)); // делители числа занесли в массив [1, 2, 4, 5, 8, 10, 16, 20, 40, 80]

// Задача №3
// function convertToArr (str) {
// 	return str.split ('');
// }
// console.log (convertToArr('abcdefg')); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// Задача №4
// function convertToArrReverse (str) {
// 	return str.split('').reverse();
// }
// console.log (convertToArrReverse ('abcdefg')); // ['g', 'f', 'e', 'd', 'c', 'b', 'a']

// Задача №5
// function Str(str) {
// 	return str.slice(0, 1).toUpperCase() + str.slice(1);
// }
// console.log (Str('sunshine')); // Sunshine

// Задача №6
// function Str(str) {
// 	let arr = str.split(' ')
// 	let arr2 = [];
// 	for (let elem of arr) {
// 		elem = elem.slice(0, 1).toUpperCase() + elem.slice(1);
// 		arr2.push(elem)
// 	}
// 	return arr2.join(" ");
// }
// console.log (Str('sun shines')); // Sun Shines

// Задача №7
// function fillArr(num) {
// 	let arr = [];
// 	for (let i = 1; i <= num; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }
// console.log (fillArr(7)); // [1, 2, 3, 4, 5, 6, 7]

// Задача №8
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(0, 100));

// Задача №9
// function getIntNum(num) {
// 	if (num > 1) {
// 		return "Простое число"
// 	} else {
// 		return "Не простое число"
// 	}
// }
// console.log (getIntNum(5))

// Задача №10
// function checkFriendlyNum(num1, num2) {
// 	let sum1 = 0, sum2 = 0;
// 	for (let i = 1; i < 2000; i++) {
// 		if (num1 % i == 0) {
// 			sum1 += i;
// 		}	
// 		if (num2 % i == 0) {
// 			sum2 += i;
// 		}
// 	}
// 	if (sum1 == sum2) {
// 		return num1 + ' и ' + num2 + ' - дружественные числа';
// 	} else {
// 		return num1 + ' и ' + num2 + ' - недружественные числа';
// 	}
// }
// console.log (checkFriendlyNum(220, 284)) // сумма всех собственных делителей первого числа равна второму числу и наоборот

// Задача №11
// function checkPerfectNum(num) {
// 	let arr = [], sum = 0;
// 	for (let i = 1; i < num; i++) {
// 		if (num % i == 0) {
// 			sum += i;
// 			console.log (sum)
// 		}	
// 	}
// 	if (num == sum) {
// 		return num + ' - совершенное число';
// 	} else {
// 		return num + ' - несовершенное число';
// 	}
// }
// console.log (checkPerfectNum(496)) // совершенное число

Задача №12
function FindHappyNum() {
	let arr = [];
	for (let num = 100000; num < 101000; num++) {
		var str = String(num);
		var sum1 = Number(str.slice(0, 1)) + Number(str.slice(1, 2)) + Number(str.slice(2, 3));
		var sum2 = Number(str.slice(3, 4)) + Number(str.slice(4, 5)) + Number(str.slice(5, 6));
		if (sum1 == sum2) {
			arr.push(num);
		} 
	}	
	return 'Счастливые билеты - ' + arr;		
}
console.log (FindHappyNum()); // Счастливые билеты - 100001,100010,100100




















































































