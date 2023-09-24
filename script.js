const body = document.getElementsByTagName("body")[0];
const soundElement = document.createElement("audio");


body.addEventListener("keydown", (event) => {
    // console.log(event.target.parentElement[`data-key`])
    console.log(event);
    // shows keycode
    if (event.keyCode == "65") {
        document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    }
})
