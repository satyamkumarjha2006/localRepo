const changeColor = document.querySelector("button");

const handler = () => {
    changeColor.style.backgroundColor = "pink";
}

changeColor.addEventListener("click" , handler);