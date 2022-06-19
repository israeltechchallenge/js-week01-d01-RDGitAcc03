function isBiggerThan(number) {
  if(number > 4){
    console.log(`The number ${number} is bigger than 4`);
  }
  else if (number === 4){
    console.log(`the number ${number} is equal to 4`);
  }
  else {
    console.log(`the number ${number} is less than 4`);
  }
}

isBiggerThan(6);

// Do not remove or change this line, or the tests won't work
export { isBiggerThan };
