// require() -> 노드에서 제공
const value = require("./1-2-1.make_module");
console.log(value);

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}
// 연속해서 넘겨줄 수는 있지만 module.exports는 파일에서 단 한 번만 사용해야 한다.
module.exports = {
  checkOddOrEven,
};
