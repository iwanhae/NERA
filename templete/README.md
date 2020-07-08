# Templete

## 라이브러리

- react-router-dom
- cross-env dev



## 시작하기

 templete 폴더에 위치한 다음 `npm start` 명령어 입력 

=> 자동으로 웹브라우저에 localhost 3000포트로 창이 띄워짐



## 폴더

### 흐름도

index.js => client/Root.js => shared/App.js (Router) => pages의 js 파일들



### 페이지 - 링크

| 페이지     | 링크            |
| ---------- | --------------- |
| Login.js   | /               |
| Main.js    | /main/:admin    |
| Problem.js | /problem/:index |

*/main 과 /problem 은 아무런 페이지도 나타나지 않음 => admin과 index 붙여주기* 

