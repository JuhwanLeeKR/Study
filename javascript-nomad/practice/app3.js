const h1 = document.querySelector("div.hello:first-child h1");


function handleH1Click() {
    // const clickedClass = "clicked";
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // .toggle()로 대체 가능.
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleH1Click);