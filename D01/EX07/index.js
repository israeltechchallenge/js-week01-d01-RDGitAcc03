function getRandomInt() {
  //your code
  let num = parseInt((Math.random() * 100));
  return num;
}

function moduloEx7(number, comparer) {
  //your code

  let str = "";
  if ((number > comparer) && (number % comparer) !== 0) {
    str = `The modulo of ${number} % ${comparer} is ${number%comparer}`;
  }
  else if(number > comparer){
    str = `The number ${number} is bigger than ${comparer}`;
  }
  else if (number < comparer){
    str = `The number ${number} is less than ${comparer}`;
  }
  else {
    str = `The number ${number} is equal to ${comparer}`;
  }
  document.getElementById("output").innerText = str;
}

let num1 = getRandomInt();
let num2 = getRandomInt();
moduloEx7(num1, num2);