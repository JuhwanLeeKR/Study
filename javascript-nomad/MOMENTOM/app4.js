const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 String만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 어떤 event의 기본 행동이든지 발생되지 않도록 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}