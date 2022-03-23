function isOneWithLowestVision(number) {
  let letter = number.toString();
  let result = 0;
  let cont = 0;
  const sumWithoutOne =
    number
      .toString()
      .split("")
      .reduce(function (r, n) {
        return r + parseInt(n);
      }, 0) - 1;

  for (let i = 0; i < letter.length; i++) {
    result =
      number
        .toString()
        .split("")
        .reduce(function (r, n) {
          return r + parseInt(n);
        }, 0) - parseInt(letter[i]);
    if (result <= sumWithoutOne) {
      cont += 1;
    }
  }
  return cont >= 2 ? true : false;
}

const num = Math.floor(Math.random()*(999999999+1));
let val = isOneWithLowestVision(num);
console.log(val)