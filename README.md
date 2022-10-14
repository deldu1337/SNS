# 익스프레스를 활용한 SNS 웹 서비스
# Facebook, Instagram, Twitter와 같은 Sns에 존재하는 기본적인 기능이 포함된 간단한 SNS 웹 서비스
#### 프로젝트 개발 기간 : 2022.04 ~ 2022.05
#### 프로젝트 개발 인원 : 4인
-----------------------
## Description
### PART 1. 프로그램 제공 기능
 - 게시물 등록/수정/삭제 기능
 - 좋아요 기능
 - 팔로우 및 팔로우 취소 기능
 - 프로필 사진 등록 및 변경 기능
 - 상태 메시지 등록 및 수정 기능
 - 내 게시물 보기 기능
 - 비밀번호 찾기 기능
 - 테마 색상 변경 기능
 
### PART 2. 프로그램 구성
 - 게시물 등록

![게시물등록1](https://user-images.githubusercontent.com/77719450/195826494-636e267c-d282-422e-ae3a-21818620cee8.PNG)
![게시물등록2](https://user-images.githubusercontent.com/77719450/195826515-997c9e70-63ea-4f33-bf13-4c5ba560aa86.PNG)



 -----------------------
### PART 3. 화면 구성 및 세부 기능
 - JavaObjServer.java
 
 ![JavaObjServer](https://user-images.githubusercontent.com/77719450/195806504-e471f9b9-4a3b-4b48-8024-8addc277bfe9.png)

 - 서버 화면
 - 서버를 실행해야만 실시간 채팅 가능
 - 아이디, 채팅 내용, 프로토콜 등 클라이언트에서 받아오는 데이터들을 실시간으로 표시
 -----------------------
 - JavaObjClientMain.java
 
![JavaObjClientMain](https://user-images.githubusercontent.com/77719450/195789360-c8e05c2d-4fbe-4eba-b80e-158f6d373243.png)

 - 로그인 화면
 - IP Address와 Port Number 표시 및 수정 가능
 - 이름과 아이디를 입력해야만 '로그인' 버튼 활성화
 - 이름과 아이디를 입력 후 '로그인' 버튼 클릭 시, 로비 화면(SecondFrame.java)으로 이동
 -----------------------

## Environment
 > Node.js version 16.17.0
 > 
 > MySQL version 8.0.26
 > 
 > Visual Studio Code IDE version 2022-09 (1.72.0)
