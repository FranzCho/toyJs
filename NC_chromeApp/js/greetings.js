const loginFrom = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault();
  loginFrom.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `안녕하세요 ${savedUsername}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginFrom.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginFrom.classList.remove(HIDDEN_CLASSNAME);
  loginFrom.addEventListener("submi", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings();
}