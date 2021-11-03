const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // 어떤 event의 기본 행동이든지 발생되지 않도록 막는다.
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);