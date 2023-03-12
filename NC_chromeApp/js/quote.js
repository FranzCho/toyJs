const quotes = [
  {
    quote: "블로그를 미루지 말자 제발",
    author: "조탕자",
  },
  {
    quote: "제발 자바스크립트 공부를 소홀히 하지말자",
    author: "조성민",
  },
  {
    quote: "리액트 복습 제발 좀 해라",
    author: "FRANZ",
  },
  {
    quote: "미라클 모닝을 꼭 하자",
    author: "조탕자",
  },
  {
    quote: "월수금 운동 빠지지 말자",
    author: "성민초",
  },
  {
    quote: "유산소 운동을 게을리 하지말자",
    author: "조센세",
  },
  {
    quote: "애정을 담아 블로그를 관리하자",
    author: "조탕자",
  },
  {
    quote: "기초를 튼튼히하자",
    author: "조성민",
  },
  {
    quote: "개발자 안될꺼냐?",
    author: "조탕자",
  },
  {
    quote: "개발자뿐",
    author: "조성민",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;