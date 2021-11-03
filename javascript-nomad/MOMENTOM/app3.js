const title = document.querySelector(".hello h1");

function handleTitleClcik() {
    title.style.color = "blue";
}


title.addEventListener("click", handleTitleClcik);