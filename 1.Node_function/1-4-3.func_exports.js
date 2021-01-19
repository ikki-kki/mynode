const { odd, even } = require("./1-4-2.exports_and_this");

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkOddOrEven;

/* module.exports !== exports === {};
  함수를 모듈 익스포츠 하면 참조 관계가 끊어진다.

  결론 :
  한 가지만 exports 하고 싶다면
  -> module.exports = 내보낼것;

  두 가지 이상 exports 하고 싶다면
  -> module.exports ={내보낼것1, 내보낼것2, ....}
  or 
  -> exports.odd = odd;
     exports.even = even;

  ! 둘 중에 하나만 선택해야함
*/
