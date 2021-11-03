const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault(); // 어떤 event의 기본 행동이든지 발생되지 않도록 막는다.
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);