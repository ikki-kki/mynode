const odd = "홀수입니다";
const even = "짝수입니다";
// 이러한 파일들의 중복을 제거하기 위해서 모듈로 만드는 것
// 다른 파일에서 쓸 수 있다.
/**
 * 이것들은 node의 모듈 시스템이고 자바스크립트의 모듈 시스템은 import이다
 * 노드에서도 쓸 수는 있지만, js 전에 노드에서 모듈 시스템이 먼저 도입이 되었었다.
 * 한 번 만들면 문법을 변경하기 어려움으로 돌아올...수...없어...
 * 하지만 import 와 module.exports는 완벽하게 같은게 아니다.
 */

// 요로코롬 모듈 만들어서 넘기기
module.exports = {
  odd,
  even,
};
