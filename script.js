// Area of a traingle 
var side1 = 5
var side2 = 6
var side3 = 7
var height = (side1 + side2 + side3)/2
// console.log(height)
 var area = Math.sqrt(height * ((height-side1) * (height -side2) * (height - side3)))
 document.write(area)
 document.write("<br />")


// Convert temperatures to and from celsius, fahrenheit

const celsius = prompt("Enter a celsius value: ");
const fahrenheit = (celsius * 1.8) + 32 
alert(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


// current date

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("dt").innerHTML = date;