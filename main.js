"use strict";
//3 Прервая программа на JavaScript
//alert('Кипфин!');

//11 Коментарии 
//Однострочный комментрарий
/*
Длинный коментарий
*/
/*
//13 Использование переменных
let num = 123;
alert(num);

//14 Объявление нескольких переменных
let a = 1;
let b = 2;
let c = 3;

let a1 = 1, b1 = 2, c1 = 3;

let a2, b2, c2;
a2 = 1;
b2 = 2;
c2 = 3;

//15 Изменения значений переменных
let a15 = 10;
alert(a15);
a15 = 20;
alert(a15);

//17 Математические операции с числами
let a16 = 1 + 2 + 3;
alert(a16);

//18 Математические операции с переменными
let a18 = 10;
let b18 = 2;
alert(a18 + b18);
alert(a18 - b18);
alert(a18 * b18);
alert(a18 / b18);

let c18 = 10;
let d18 = 5;
let result18 = c18 + d18;
alert(result18);

let a188 = 1;
let b188 = 2;
let c188 = 3;
alert(a188 + b188 +c188);

let a1888 = 10;
let b1888 = 5;
let c1888 = a1888 - b1888;
let d1888 = 7;
let result1888 = c1888 + d1888;
alert(result1888);

//22 Дроби
let a22 = 1.5;
let b22 = 0.75;
alert(a22 + b22);

//23 Отрицательные числа
let a23 = -100;
alert(a23);


let a233 = 23;
alert(-a233);

//25 Остаток от деления
let a25 = 13;
let b25 = 5;
alert(a25 + b25);

//26 Возведение в степень
alert(2**10);

//28 Строки
let str28 = 'Ксения';
let strr28= 'Фёдорова';
alert(str28 +" " + strr28)

//29 Сложние строк
let str29 = '!!!';
alert(str29);

let st29 = 'java';
let st299 = 'script';
alert(st29 + st299);

let str299 = 'hello';
let str2999 = 'word';
alert(str299 + ' ' + str2999);

//30 Длина строки
alert('bhfhh'.length);

//31 Шаблонные строки
let str31 = 'xxx';
let str311 = 'yyy';
let txt31 = `aaa ${str31} bbb ${str311}`;
alert(txt31);

//32 Многострочность
let str32 = `a
b c`;
alert(str32);

//34 Значение undefined
let a34;
alert(a34);

//35 Значение null
let a35 = null;
alert(a35);

//36 Значение true и false
let a36 = true;
alert(a36);

let a366 = false;
alert(a366);

//37 Значение NaN
let a37 = 'aer';
let str37 = 'fvgrg';
alert(a37 * str37);

//38 Infinity и -Infinity
alert(10 / 0);
alert(-10 / 0);

//39 Консоль
let a38 = 12;
console.log(a38);

let b38 = 1;
let c38 = 2;
let d38 = 3;
console.log(b38, c38, d38);

//40 Типы данных в консоли
console.log(123);
console.log('123');

//42 Константы
const PI = 3.14;
console.log(2*PI*13);

//45 Короткое преобразование 
let a45 = +'2';
let b45 = +'3';
alert(a45 + b45);

//47 Выведение чисел
let a47 = '5px';
let b47 = '6px';
console.log(parseInt(a47) + parseInt(b47));

let c47 = '5.5px';
let d47 = '6.25px';
alert(parseFloat(c47) + parseFloat(d47) + ' px');

//48 Преобразование к строке
let a48 = 34;
let b48 = 56;
console.log(String(a48) + String(b48));

//49 Применение преобразования к строке
let a50 = 2356;
console.log(String(a50).length);

let b50 = 4567;
let c50 = 34;
console.log((String(b50)+String(c50)).length);

//52 Символы строки
let str52 = 'abcde';
console.log(str52[0]);
console.log(str52[2]);
console.log(str52[4]);

let a52 = 'abcde';
console.log(a52[4],a52[3],a52[2], a52[1], a52[0]);

let str522 = 'abcde';
let num52 = 3;
console.log(str522[num52]);

//54 Последний символ строки
let str54 = 'abcde';
console.log(str54[str54.length -1]);

console.log(str54[str54.length -2]);

//55 Строки с цифрами
let a55 = '12345';
let sum55 = (Number(a55[0]) + Number(a55[1]) + Number(a55[2]) + Number(a55[3]) + Number(a55[4]));
console.log(sum55);

//56 Обращаемся к цифрам числа
let a56 = String(12345);
console.log(a56[0] * a56[1] * a56[2] * a56[3] * a56[4]);
console.log(a56[4] , a56[3] , a56[2] , a56[1] , a56[0]);

//58 Сокращение операции в JavaScript
let num58 = 47;
num58 +=7;
num58-=18
num58 *=10;
num58/=15;
console.log(num58);

//59 Инкримент и дикремент
let num59 = 10;
num59++;
num59++;
num59--;
console.log(num59);

//62 Функция prompt
alert(prompt('Возраст'));

//63 Проблема с типами в prompt
let num63 = prompt('Введите первое число');
let num633 = prompt('Введите второе число');
alert(Number(num63) + Number(num633));

let a63 = prompt('Введите сторону квадрата');
alert(a63**2);

let b63 = prompt('Введите длину прямоугольника');
let b633 = prompt('Введите ширину прямоугольника');
alert(2*(Number(b63) + Number(b633)));

//64 Вывод в документ
document.write('64 задание');
document.write('<b>64 задание</b>');
let str64 = '<b>text</b>';
document.write(str64)

document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');

//65 Практика на поимк ошибок
let a65 = 1;
let b65 = 2;
let c65 = 3;
console.log(a65 + b65 + c65);

let num65 = '123';
let sum65 = Number(num65[0]) + Number(num65[1]) + Number(num65[2]);
console.log(sum65);

let num655 = String(123);
console.log(num655[0]);

let a65 = 0;
console.log(++a65);

let a655 = 24 * 60 * 60;
console.log(a655);

let num65666 = 123;
let str65666 = String(num5666);
console.log(str5666.length);

let num656666 = 123;
let str656666 = String(num656666);
console.log(str656666[str656666.length -1]);

let num6566666 = 123;
let str6566666 = String(num6566666);
console.log(str6566666.length);

let nu656 = 123;
let st656 = String(nu656);
console.log(st656[st656.length -1]);

let a655 = '123';
let b655 = '456';
let s655 = Number(a655) + Number(b655);
console.log(s655);

//66 Практика на операции
console.log(24*60*60);
console.log(30*24*60*60);
console.log(365*24*60*60);
console.log(24*60);
console.log(365*24*60);
console.log(1024**2);
console.log(2**30);
console.log(10*2**30);
console.log(2**40);
console.log(2**30);

//67 Практика на формулы 
let r67=20, s67;
s=2*PI*r76;
console.log(s67)

let a67=5, s677;
s677=a67**2;
console.log(s677);

let a677=45, b677=45;
let p677=(a677*b677);
console.log("Площадь введенного прямоугольника:", p677);

let a6777=45, b6777=45, s6777;
s6777=(a6777+b6777)*2;
console.log("Периметр введенного прямоугольника:", s6777);

let tc67=89;
let f67 = (9/5)*tc67+32
console.log((f67).toFixed(2));

let tf677 = 89;
console.log(((5/9)*(tf677-32)).toFixed(2));

//68 Введение в массивы
let arr68 = [1, 2, 3];
alert(arr68);

let arr688 = ['a', 'b', 'c'];
alert(arr688);
console.log(arr688);

//69 Получение элементов
let arr69 = [1, 2, 3];
console.log(arr69[0], arr69[1], arr69[2]);
console.log(arr69[0] + arr69[1] + arr69[2]);

let ar69 = ['a', 'b', 'c', 'd'];
console.log("'"+ar69[0]+"+"+ar69[1] + "+" + ar69[2] + "+" + ar69[3]+"'");

//70 Длина массива
let arr70 = ['a', 'b', 'c'];
console.log(arr70.length)

let ar70 = ['a', 'b', 'c'];
console.log(ar70[ar70.length - 1])

//71 Изменение элементов
let arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);

//72 Перезапись элементов массива
let arr72 = ['a', 'b', 'c'];
arr72[0] += '3';
arr72[1] += '3';
arr72[2] += '3';
console.log(arr72);

//73 Инкремент и дискремент
let arr73 = [1, 2, 3, 4];
arr73[0]++;
arr73[1]++;
arr73[2]++;
arr73[3]++;
console.log(arr73);

//74 Добавление элементов по ключам
let arr74 = [];
arr74[0] = 1;
arr74[1] = 2;
arr74[2] = 3;
console.log(arr74); 

let ar74 = [1, 2, 3];
ar74[3] = 4;
ar74[4] = 5;
console.log(ar74);

//75 Разреженные массивы
let arr75 = [];
arr75[3] = 'a';
arr75[8] = 'b';
console.log(arr75.length);

//76 Добавление элемннтов через push
let arr76 = [];
arr76.push(1);
arr76.push(2);
arr76.push(3);
console.log(arr76);
arr76.push(4);
arr76.push(5);
console.log(arr76);

//77 Ключи из переменных
let arr77 = ['a', 'b', 'c'];
let key77 = 2;
console.log(arr77[key77]);

let ar77 = [1, 2, 3, 4, 5];
let key177 = 1;
let key277 = 2;
console.log(ar77[key177] + ar77[key277]);

//78 Оператор delete
let arr78 = ['a', 'b', 'c', 'd', 'e'];
delete arr78[1];
delete arr78[2];
console.log(arr78.length);

//79 Практика на поиск ошибок
let arr79 = [1, 2, 3, 4, 5];
console.log(arr79[arr79.length -1]);

let arr799 = [1, 2, 3, 4, 5];
console.log(arr799[1] + arr799[2] + arr799[3] + arr799[4] + arr799[0]);

let ar79 = [1, 2, 3, 4, 5];
console.log(ar79.length);

let ar799 = [1, 2, 3, 4, 5];
console.log(ar799.lenght);

//80 Введение в объекты
let obj80 = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
console.log(obj80[1] + obj80[2] +obj80[3] +obj80[4] +obj80[5] +obj80[6] + obj80[7]); 

//81 Вывод всего объекта
let obj81 = {1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Август', 9:'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь'};
console.log(obj81[1] + obj81[2] + obj81[3] + obj81[4] + obj81[5] + obj81[6] + obj81[7] + obj81[8] + obj81[9] + obj81[10] + obj81[11] +obj81[12]);

//84 Ограничения на ключи объектов
let obj84 = {
	'a1': 1,
	'b2': 2,
	'c_c': 3,
	'd4': 4,
	'e5': 5
};

console.log(obj84.a1);
console.log(obj84.b2);
console.log(obj84.c_c);
console.log(obj84.d4);
console.log(obj84.e5);


//86 Добавление элементов
let obj86 = {};
obj86.a = 1;
obj86.b = 2;
obj86.c = 3;
console.log(obj86);

//87 Неупорядоченность объектов
let obj87 = {3: 'c', 1: 'a', 2: 'b'};
console.log(obj87[1]);
console.log(obj87[2]);
console.log(obj87[3]);

//88 Массив ключей объекта
let obj88 = {x: 1, y: 2, z: 3};
let keys88 = Object.keys(obj88);
console.log(keys88);

//89 Длина объекта
let obj89 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj89).length);

//90 Ключи объектов из переменных
let obj90 = {x: 1, y: 2, z: 3};
let key90 = 'y';
console.log(obj90[key90]);

//91 Ошибка обращения к элементу
let obj91 = {x: 1, y: 2, z: 3};
console.log(obj91.x);

let obj911 = {x: 1, y: 2, z: 3};
let key911 = 'x';
console.log(obj911[key911]);

//92 Ошибка обращения к свойству
let objj92 = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(objj92[prop]);*/

//93 Вычисляемые свойства
let key93 = 'x';

let obj93 = {
	[key93]: 1,
	y: 2,
	z: 3
};
console.log(obj93);

//103 Пракика на поиск ошибок
let obj103 = {x: 1, y: 2, z: 3};
console.log(obj103.x);

let obj1033 = {x: 1, y: 2, z: 3};
let key1033 = 'x';
console.log(obj1033[key1033]);

let obj10333 = {x: 1, y: 2, z: 3};
let sum = obj10333.x + obj10333.y + obj10333.z;
console.log(sum);

let obj103333 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj103333).length);
