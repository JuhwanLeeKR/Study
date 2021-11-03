const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

//setInterval(sayHello, 5000); // 시간마다 함수를 사용
setTimeout(sayHello, 5000);