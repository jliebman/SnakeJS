var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');

var factorial = 1;
for(var i = 1; i <= fNum1; i++)
{
	factorial = factorial * i;
}
var sumdig = 0;

for(var i = 0; i < fNum2.length; i++)
{
	sumdig = sumdig + Number(fNum2.charAt(i));
}

var revNum = "";  

for(var i = 0; i < fNum3.length; i++)
{
	revNum += fNum3.charAt(fNum3.length-1-i);
}

var pal = true;

for(var i = 0; i < fNum4.length/2; i++)
{
	if(fNum4.charAt(i) != fNum4.charAt(fNum4.length-1-i))
	{
		pal = false;
		break;
	}
}

console.log("Factorial of first number is: " + factorial);
console.log("Sum of digits of second number is : " + sumdig);
console.log("Reverse of third number is: " + revNum);
console.log("Is the fourth number a Palindrome: " + pal);
