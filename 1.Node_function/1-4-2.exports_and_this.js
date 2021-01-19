// 노드에서는 브라우저와 다르게 파일 등의 컴퓨터에 접근할 수 있음. 보안에 조심해야 한다

const odd = "홀수입니다";
const even = "짝수입니다";

// module 생략 가능
// module.exports = { odd, even };

// 하지만 따로따로 export 해야함
exports.odd = odd;
exports.even = even;

/* 둘의 차이 :
module.exports === exports === {} (초기값은 빈 객체)

module.exports = {
  odd,
  even,
}

어?
그럼 function을 module.exports 하면 어떡함?
다음 파일
*/
