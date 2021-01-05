function helloWorld() {
  console.log("hello world");
  helloNode();
}

function helloNode() {
  console.log("hello node");
}

helloWorld();
/*
# 1. REPL 사용하기

## 자바스크립트는 스크립트 언어라서 즉석에서 코드를 실행할 수 있음

- REPL이라는 콘솔 제공
- R(Read), E(Evaluate), P(Print), L(Loop)
- 윈도우에서는 명령 프롬프트, 맥이나 리눅스에서는 터미널에 node 입력

## 사용 방법

- 노드를 깔았다면 터미널에 들어가서 $ node 명령어를 실행한다
- 노드에서 나가고 싶다면 control + c 두 번
- 터미널창에서는 폴더의 위치로 들어가서 $ node 파일명 (.js 생략가능)

```
❯ node
Welcome to Node.js v14.1.0.
Type ".help" for more information.
> const str = "Hello world";
undefined
> str
'Hello world'
>
(To exit, press ^C again or ^D or type .exit)
>
```
*/
