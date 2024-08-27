<!-- # 목차

- [프로젝트 정보](#프로젝트-정보)
  - [프로젝트명](#프로젝트명)
  - [개발 기간](#개발-기간)
  - [개발자](#개발자)
  - [사용 기술](#사용-기술)
- [프로젝트 소개](#프로젝트-소개)
  - [주제](#주제)
  - [기능](#기능)
  - [시연 영상](#시연-영상)
- [아키텍처](#아키텍처)
  - [디렉토리 구조](#디렉토리-구조)
  - [컴포넌트 구조](#컴포넌트-구조)
- [기록](#기록) -->

# 포켓몬 도감

![pokemon-dex-home](https://github.com/user-attachments/assets/03b299c2-e83e-4bbc-b214-8e3264e2b036)

🔗 배포링크 : [포켓몬 도감](https://minji-pokemon-dex.netlify.app/)

<br>

## 🔥 프로젝트 정보

### 👉🏻 프로젝트 주제

- 포켓몬 도감 만들기

### 👉🏻 개발 기간

- 2024.08.16 - 2024.08.26

<!-- ### 개발자

<table>
   <tr>
    <td align="center"><b>Frontend</b></td>
  </tr>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/jungminji0215" width="100px" /></td>
  </tr>
  <tr>
    <td align="center"><b><a href="https://github.com/jungminji0215">정민지</a></b></td>
  </tr>
</table> -->

### 👉🏻 사용 기술

<div style="display: flex; gap: 10px;">
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
</div>

<br>

## 🔥 프로젝트 소개

### 👉🏻 설명

- 이 프로젝트는 포켓몬 도감 애플리케이션입니다. 포켓목 목록과 상세 정보를 볼 수 있으며 나만의 포켓몬 목록에 포켓몬을 추가하거나 삭제할 수 있는 기능을 제공합니다.

### 👉🏻 기능

1. 홈 페이지

![pokemon-dex-home](https://github.com/user-attachments/assets/7bc8fef1-9ab1-4f53-aa62-9b3ff706b9fc)

- 빨간색 버튼을 클릭하면 메인페이지로 이동합니다.

<br>

2. 메인 페이지

![pokemon-dex-main](https://github.com/user-attachments/assets/31556541-524e-4f0a-8f1a-f40d8c24c8c1)

- 포켓몬 카드의 '추가' 버튼을 누르면 상단 대시보드에 포켓몬이 추가됩니다.
- 대시보드의 포켓몬 카드의 '삭제' 버튼을 누르면 대시보드에서 제거됩니다.

<br>

3. 상세 페이지

![pokemon-dex-detail](https://github.com/user-attachments/assets/dd818923-aa1e-4058-8b3d-b2c45baa11e1)

- 포켓몬의 상세 정보를 확인할 수 있는 페이지입니다.
- '추가하기' 버튼을 누르면 메인페이지의 대시보드에 포켓몬이 추가됩니다.

### 👉🏻 시연 영상

https://github.com/user-attachments/assets/397ad38d-0aa1-4be4-9067-8f96fd83abbc

<br>

## 🔥 아키텍처

### 👉🏻 디렉토리 구조

![dir](https://github.com/user-attachments/assets/2d5c6a03-04f4-47ac-86c7-e297839ac117)

### 👉🏻 컴포넌트 구조

![component](https://github.com/user-attachments/assets/f35f367e-bc48-4724-b446-d36c52bade2c)

<br>

## 🔥 기록

- [포켓몬 도감 블로그 기록](https://jungminji0215.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%5B%EA%B0%9C%EC%9D%B8%5D%20%ED%8F%AC%EC%BC%93%EB%AA%AC%20%EB%8F%84%EA%B0%90%20%EB%A7%8C%EB%93%A4%EA%B8%B0)

<br>

## 🔥 개선할 부분

- [x] RTK 사용해서 리팩토링
- [ ] 포켓몬 id : 1 → 001 형식으로 변경
- [ ] 반응형으로 바꾸기
- [ ] 전역 스타일링으로 리팩토링해보기
- [ ] 뒤로가기 개선
- [ ] UX 개선
  - 추가 누르면 추가 되었습니다 알림뜨고 대시보드 쪽으로 이동하기 등..
