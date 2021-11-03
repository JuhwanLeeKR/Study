const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 String만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 어떤 event의 기본 행동이든지 발생되지 않도록 막는다. Step1. event가 원래 하려는 행동을 멈춰준다. (브라우저의 새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME); // Step2. form을 숨겨준다.
    const username = loginInput.value; // Step3. loginInput.value를 username이라는 변수로 저장해준다.
    localStorage.setItem(USERNAME_KEY, username); // Step4. username 값을 username이라는 key와 함께 local storage에 저장한다.
    paintGreetings(); // Step5. paintGreetings 함수를 호출한다.
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
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
    paintGreetings();
}