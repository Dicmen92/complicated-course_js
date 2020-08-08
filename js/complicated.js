let num = 266219,
power = 0,
mult = String(num);

/*Первый способ*/ 
console.log('произведение (умножение) цифр числа',num, 'равен', mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5], '(вариант №1)');

/*Второй способ*/ 
let arr = [mult[0], mult[1], mult[2], mult[3], mult[4], mult[5]],
result = arr.reduce(function(mult, current) 
{
  return mult * current;
}, 1);
console.log( 'произведение (умножение) цифр числа',num, 'равен',result, '(вариант №2)');

power = result ** 3;
console.log('Полученный результат возводим в степень 3 и получаем число', power);

let firstNum = power;
console.log('Выводим на экран первые 2 цифры полученные от числа', power, '=', String(firstNum).slice(0,2));
