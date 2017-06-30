var tempF = prompt("enter temp in fahrenheit to convert to celcius");

var tempC = ((tempF-32) * (5/9))
/*---
round to 3 decimal places to tidy it up a little
---*/
console.log(tempC.toFixed(3));
