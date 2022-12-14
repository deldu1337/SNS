# 익스프레스를 활용한 SNS 웹 서비스
# Facebook, Instagram, Twitter와 같은 Sns에 존재하는 기본적인 기능이 포함된 간단한 SNS 웹 서비스
#### 프로젝트 개발 기간 : 2022.04 ~ 2022.05
#### 프로젝트 개발 인원 : 4인
-----------------------
## Index
- [Description](https://github.com/deldu1337/SNS/blob/main/README.md#description)
  - [PART 1. 프로그램 제공 기능](https://github.com/deldu1337/SNS/blob/main/README.md#part-1-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%A0%9C%EA%B3%B5-%EA%B8%B0%EB%8A%A5)
  - [PART 2. 프로그램 구성](https://github.com/deldu1337/SNS/blob/main/README.md#part-2-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EA%B5%AC%EC%84%B1)
  - [PART 3. 화면 구성 및 세부 기능](https://github.com/deldu1337/SNS/blob/main/README.md#part-3-%ED%99%94%EB%A9%B4-%EA%B5%AC%EC%84%B1-%EB%B0%8F-%EC%84%B8%EB%B6%80-%EA%B8%B0%EB%8A%A5)
- [Environment](https://github.com/deldu1337/SNS/blob/main/README.md#environment)
## Description
### PART 1. 프로그램 제공 기능
 - 게시물 등록/수정/삭제 기능
 - 좋아요 기능
 - 팔로우 및 팔로우 취소 기능
 - 프로필 사진 등록 및 변경 기능
 - 상태 메시지 등록 및 수정 기능
 - 내 게시물 보기 기능
 - 해시태그 기능
 - 비밀번호 찾기 기능
 - 테마 색상 변경 기능
 
### PART 2. 프로그램 구성


### PART 3. 화면 구성 및 세부 기능
 #### 게시물 등록
 1.
 ![게시물등록1](https://user-images.githubusercontent.com/77719450/195826494-636e267c-d282-422e-ae3a-21818620cee8.PNG)
 - 사진 업로드 버튼 클릭으로 이미지 첨부
 - 글 작성 후 **게시** 버튼 클릭
 2. 
 ![게시물등록2](https://user-images.githubusercontent.com/77719450/195826515-997c9e70-63ea-4f33-bf13-4c5ba560aa86.PNG)
 - 게시물 등록 후 창 자동 새로고침

 -----------------------
 #### 게시물 수정
 1.
 ![게시물수정1](https://user-images.githubusercontent.com/77719450/195827331-c331e0a0-92e0-4b55-8a3a-5d8b5df7bc23.PNG)
 - 수정할 게시물 우측 상단의 **수정** 버튼 클릭 시, **"수정할 내용을 입력하세요."** 입력 창 표시
 - **"수정할 내용을 입력하세요."** 입력 창에 수정할 내용 입력 후 **확인** 버튼 클릭
 2.
 ![게시물수정2](https://user-images.githubusercontent.com/77719450/195827347-cdea8fd6-34f3-473f-938b-28ec56b217d8.PNG)
 - 게시물 수정 후 창 자동 새로고침
 -----------------------
 #### 게시물 삭제
 1.
 ![게시물삭제1](https://user-images.githubusercontent.com/77719450/195827620-35323d0c-4fe5-44e7-8bc5-53fb242a2004.PNG)
 - 삭제할 게시물 우측 상단의 **삭제** 버튼 클릭 시, **"삭제 하시겠습니까?"** 메시지 표시
 - **"삭제 하시겠습니까?"** 메시지에서 **확인** 버튼 클릭
 2.
 ![게시물삭제2](https://user-images.githubusercontent.com/77719450/195827637-d4dbf432-f104-419f-aeed-70f1814afd26.PNG)
 - 게시물 삭제 후 창 자동 새로고침
 -----------------------
 #### 좋아요
 1.
 ![좋아요](https://user-images.githubusercontent.com/77719450/195828024-e61a90ca-5d93-421b-94fe-cb5d59c68315.PNG)
 - 엄지 버튼 클릭 시, 좋아요 수 1증가
 -----------------------
 #### 팔로우
 1.
 ![팔로우1](https://user-images.githubusercontent.com/77719450/195828346-f723043c-3e4c-4a02-bee4-3765a56459a4.PNG)
 - 팔로우할 계정의 **팔로우** 버튼 클릭 시, **"팔로잉하시겠습니까?"** 메시지 표시
 - **"팔로잉하시겠습니까?"** 메시지에서 **확인** 버튼 클릭
 2.
 ![팔로우2](https://user-images.githubusercontent.com/77719450/195828361-1557b897-c1b3-4194-b1d9-f5e2df1facdf.PNG)
 - 좌측 레이아웃 팔로잉 수 1증가
 - 기존 **팔로우** 버튼이, **팔로우취소** 버튼으로 변경
 3.
 ![팔로우3](https://user-images.githubusercontent.com/77719450/195828373-cabe6809-6af6-4f31-ad0c-03bf8646267c.PNG)
 - **내 프로필** 버튼 클릭 시, 팔로잉 목록에 **팔로우** 버튼 클릭한 계정 닉네임 표시
 -----------------------
 #### 팔로우 취소
 1.
 ![팔로우취소1](https://user-images.githubusercontent.com/77719450/195828671-81cae325-d5d0-4dbf-a015-10c6420cb51c.PNG)
 - 팔로우 취소할 계정의 **팔로우취소** 버튼 클릭 시, **"팔로우취소하시겠습니까?"** 메시지 표시
 - **"팔로우취소하시겠습니까?"** 메시지에서 **확인** 버튼 클릭
 2.
 ![팔로우취소2](https://user-images.githubusercontent.com/77719450/195828698-26ea9855-7513-4703-a2a5-c8381715b904.PNG)
 - 좌측 레이아웃 팔로잉 수 1감소
 - 기존 **팔로우취소** 버튼이, **팔로우** 버튼으로 변경
 3.
 ![팔로우취소3](https://user-images.githubusercontent.com/77719450/195828713-d48b9b3e-da77-4c4b-a19e-02857b37fb19.PNG)
 - **내 프로필** 버튼 클릭 시, 팔로잉 목록에 **팔로우취소** 버튼 클릭한 계정 닉네임 표시 삭제
 -----------------------
 #### 프로필 사진 등록
 1.
 ![프로필사진등록1](https://user-images.githubusercontent.com/77719450/195830918-09baa9a3-5fe2-4933-8cd1-1b458985531b.PNG)
 - **내 프로필** 버튼 클릭, 프로필사진 업로드 버튼으로 이미지 첨부 후 **등록** 버튼 클릭
 2.
 ![프로필사진등록2](https://user-images.githubusercontent.com/77719450/195830930-a4acc68e-394b-415e-8a5a-309a9b856a58.PNG)
 - 좌측 레이아웃에 프로필 사진 등록
 3.
 ![프로필사진등록3](https://user-images.githubusercontent.com/77719450/195830949-3d7b649c-7a81-4919-9ba6-997ae96a442f.PNG)
 - **메인 화면** 버튼 클릭으로 메인 화면 이동 시, 닉네임 상단에 프로필 사진 표시
 -----------------------
 #### 프로필 사진 변경
 1.
 ![프로필사진변경1](https://user-images.githubusercontent.com/77719450/195831970-9be82ee9-c0bb-492f-b743-658b0b7058ce.PNG)
 - **내 프로필** 버튼 클릭, 프로필사진 업로드 버튼으로 이미지 첨부 후 **등록** 버튼 클릭
 2.
 ![프로필사진변경2](https://user-images.githubusercontent.com/77719450/195831980-58907303-4b79-4f44-84cc-6604c1d070ac.PNG)
 - 좌측 레이아웃에 변경한 프로필사진 등록
 3.
 ![프로필사진변경3](https://user-images.githubusercontent.com/77719450/195831989-afffe32f-0036-40a4-a561-88cbdcef255d.PNG)
- **메인 화면** 버튼 클릭으로 메인 화면 이동 시, 닉네임 상단에 변경한 프로필 사진 표시
 -----------------------
 #### 상태 메시지 등록
 1.
 ![상태메시지등록1](https://user-images.githubusercontent.com/77719450/195832939-3aa6008b-fd22-4391-a20d-8cdcbb8fae42.PNG)
 - **내 프로필** 버튼 클릭 후 **변경** 버튼 클릭 시, **"변경할 내용을 입력하세요."** 입력 창 표시
 - **"변경할 내용을 입력하세요."** 입력 창에 내용 입력 후 **확인** 버튼 클릭
 2.
 ![상태메시지등록2](https://user-images.githubusercontent.com/77719450/195832951-82c5e9dc-17da-471e-87ee-62da203aa3e4.PNG)
 - 상태 메시지 등록 후 창 자동 새로고침
 3.
 ![상태메시지등록3](https://user-images.githubusercontent.com/77719450/195832987-87ebf493-fdf4-4eac-94c7-69e7b69b450e.PNG)
 - **메인 화면** 버튼 클릭으로 메인 화면 이동 시, 닉네임과 게시글 사이에 상태 메시지 표시
 -----------------------
 #### 상태 메시지 수정
 1.
 ![상태메시지수정1](https://user-images.githubusercontent.com/77719450/195833678-feb30a6d-4b4c-4953-ba2a-b9748c3b0612.PNG)
 - **내 프로필** 버튼 클릭 후 **변경** 버튼 클릭 시, **"변경할 내용을 입력하세요."** 입력 창 표시
 - **"변경할 내용을 입력하세요."** 입력 창에 변경할 내용 입력 후 **확인** 버튼 클릭
 2.
 ![상태메시지수정2](https://user-images.githubusercontent.com/77719450/195833694-9c422357-fb4b-4dc8-85be-197038dcb4c7.PNG)
- 상태 메시지 변경 후 창 자동 새로고침
 3.
 ![상태메시지수정3](https://user-images.githubusercontent.com/77719450/195833714-efb9e062-06f2-40a8-b873-ba5ffcb00d0b.PNG)
 - **메인 화면** 버튼 클릭으로 메인 화면 이동 시, 닉네임과 게시글 사이에 변경한 상태 메시지 표시
 -----------------------
 #### 내 게시물 보기
 1.
 ![내게시물보기](https://user-images.githubusercontent.com/77719450/195834099-25f87fad-ba17-4f5b-a674-4c695d77fccb.PNG)
 - 메인 화면에서 **내 게시글** 버튼 클릭 시, 현재 접속한 계정이 작성한 게시글만 표시
 - **전체 게시글** 버튼 클릭 시, 전체 게시글 표시
 -----------------------
 #### 해시태그
 1.
 ![해시태그1](https://user-images.githubusercontent.com/77719450/195845369-47bbb36a-4573-4696-bb34-240f87c73a97.PNG)
 - 태그 검색 란에 해시태그 입력 후 **검색** 버튼 클릭
 2.
 ![해시태그2](https://user-images.githubusercontent.com/77719450/195845500-afb1edab-479b-49f1-9c18-5e432d4dafb4.PNG)
 - 해당 해시태그 게시물만 표시
 -----------------------
 #### 비밀번호 찾기
 1.
 ![비밀번호찾기1](https://user-images.githubusercontent.com/77719450/195844450-f2300361-c65e-4bc6-b13c-f4a84a9585ff.PNG)
 - 비로그인 상태에서 좌측 레이아웃 **비밀번호 찾기** 버튼 클릭 시, 비밀번호 찾기 창 표시
 - 이메일, 질문, 답 입력 후 **찾기** 버튼 클릭
 2.
 ![비밀번호찾기2](https://user-images.githubusercontent.com/77719450/195844483-eadbb2c2-c746-4e77-8719-714ca9a4164d.PNG)
 - 해당하는 계정명과 비밀번호를 원문으로 알려주는 메시지 표시
 -----------------------
 #### 테마 색상 변경
 1.
 ![테마색상변경](https://user-images.githubusercontent.com/77719450/195848164-81dd9740-96c1-4d72-8941-60486ec61179.PNG)
 
||||
|----|---|---|
|메인|노을|다크|
|해변|매력|카툰|
|모던|레고|미니멈|
- **랜덤 테마** 버튼 클릭 시, 9가지의 테마 중 무작위 변경
-----------------------
## Environment
 > Node.js version 16.17.0
 > 
 > MySQL version 8.0.26
 > 
 > Visual Studio Code IDE version 2022-09 (1.72.0)
