// Logical Operators
var num = 0;
console.log(num);
if (num == 0) {
  console.log("Number is zero");
} else {
  console.log("Number is not zero");
}

//   console.log(num);

var weekDay = 1;

//  Else if ladder
if (weekDay == 1) {
  console.log("Sunday");
} else if (weekDay == 2) {
  console.log("Monday");
} else if (weekDay == 3) {
  console.log("Tuesday");
} else if (weekDay == 4) {
  console.log("Wednesday");
} else if (weekDay == 5) {
  console.log("Thursday");
} else if (weekDay == 6) {
  console.log("Friday");
} else if (weekDay == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid Input");
}

// Swtich Case
switch (weekDay) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Input");
    break;
}
console.log("Done!");
