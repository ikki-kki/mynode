// 노드에서 global은 브라우저의 window와 비슷한 역할이지만 브라우저가 아니기 때문에 window 나 document를 쓸 수 없다.
// console.log도 원래 global.console.log다
// global 속성에 값을 대입하면 다은 파일에서도 사용 가능

// # 콘솔 메서드
// console.log() 외에 다른걸 알아보자
// console.dir({}) -> 객체를 로깅할 때 좋다
// console.time('같은거') ~ console.timeEnd('같은거') 해당 사이에 함수가 발생하는데 걸리는 코드 수행시간을 알 수 있다.
// console.trace() -> 함수 안에서 쓰면 호출 스택을 보여준다. anonymous까지 알 수 있다
// console.table([{}]) -> 테이블 형태로 보여준다

/* # 타이머 메서드
set 메서드에는 clear 메서드가 대응된다
- set 메서드의 리턴값(변수)을 clear 메서드에 넣어 취소

- setTimeout(콜백함수, 밀리초) : 주어진 밀리초(1000분의 1초) 이후에 콜백함수 실행
- setInterval(콜백함수, 밀리초) : 주어진 밀리초마다 콜백 함수를 반복 실행합니다. 변수 안에 담아줘야함
- setImmediate(콜백함수) : 콜백함수를 즉시 실행합니다. === setTimeout(fn, 0)과 똑같지만 실행순서가 다름 **노드에서만**
  global 상에선 코드가 동시 실행될 수 있는데 setImmediate()로는 백그라운드로 보내는 대표적인 비동기 코드다

- clearTimeout(변수) : setTimeout을 취소
- clearInterval(변수) : setInterval을 취소
- clearImmediate(변수) : setImmediate를 취소
*/

const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearTimeout(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("즉시 실행");
});

clearImmediate(immediate2);
