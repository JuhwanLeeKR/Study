const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000); // 시간마다 함수를 사용
// setTimeout(sayHello, 5000); // 시간이 흐른 뒤 함수를 사용

getClock(); // 웹페이지가 열리면 즉시 함수가 실행되게
setInterval(getClock, 1000);