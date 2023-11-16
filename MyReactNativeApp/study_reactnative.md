React Native
=============

# learn the basics

-JSX
-components
-state
-props
-native components(ReactNative specific)

## Hello World
App.js에 붙여넣어서 돌려보기

## What's going on herer?(Hello World 분석)

Text 콤포넌트 : render a text
View 콤포넌트 : container, help control style & layout

FlexBox에 대해 공부해보기
https://reactnative.dev/docs/flexbox

Javascript ES2015(ES6)

ES6 공부해보기
https://babeljs.io/docs/learn/

JSX - Javascript with embedded XML(HTML)

## Components
HelloWorldApp componet

Anything you see on screen is some sort of component.

## Props
components are customized with parameters (=props), enable reusing

props : these creation parameters

props과 Text, Image, View 이 3가지 콤포넌트를 잘 활용하면, 다양한 정적인 스크린을 연출할 수 있다.

동적인, 시간에 따라 변하는 앱을 만들기 위해서는 State(스테이트)에 대해 알아야 한다.

## State
props가 읽기전용이고 수정이 불가한 반면, state는 콤포넌트로 하여금 유저 액션 또는 네트워크 응답 등에 반응하여 변화하는 결과물을 내놓게 한다.

props가 부모 콤포넌트로 부터 전달되는 파라메터 변수라면, states는 콤포넌트가 내부적으로 초기화하고 관리한다.

스테이트 개념 익히기 : 카운터 예제

클래스 방식의 콤포넌트 vs 함수 방식의 콤포넌트(Hook 사용)


## 과제(실습)
-여러 개의 뷰를 가진 앱을 만들기 
-버튼을 누르면 다음 뷰(페이지)가 계속해서 열리는 총 10개의 뷰(페이지)를 가짐