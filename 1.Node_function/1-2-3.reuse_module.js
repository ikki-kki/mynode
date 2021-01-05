const { odd, even } = require("./1-2-1.make_module");
const checkNumber = require("./1-2-2.use_module");

function checkoutStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkoutStringOddOrEven("hello"));
