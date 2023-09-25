const body = document.getElementsByTagName("body")[0];

// const music65 = document.querySelector('audio[data-key="65"]');
// const music83 = document.querySelector('audio[data-key="83"]');
// const music68 = document.querySelector('audio[data-key="68"]');
// const music70 = document.querySelector('audio[data-key="70"]');
// const music71 = document.querySelector('audio[data-key="71"]');
// const music72 = document.querySelector('audio[data-key="72"]');
// const music74 = document.querySelector('audio[data-key="74"]');
// const music75 = document.querySelector('audio[data-key="75"]');
// const music76 = document.querySelector('audio[data-key="76"]');

let datakey = "";

// const music65 = document.getElementById("65")
// oder ('audio[datakey="65"]') , aber nicht mit -;

body.addEventListener("keydown", (event) => {
    // console.log(event.target.parentElement[`data-key`])
    console.log(event.keyCode);
    // shows keycode
    // if (event.keyCode == "65") {
    //     // document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    // }
    datakey = event.keyCode;
    if (datakey == "65" || datakey == "83" || datakey == "68" || datakey == "70" || datakey == "71" || datakey == "72" || datakey == "74" || datakey == "75" || datakey == "76") {
        const music = document.querySelector(`audio[data-key="${datakey}"]`);
        music.play();
        const changeKeyStyle = document.querySelector(`div[data-key="${datakey}"]`);
        changeKeyStyle.classList.add("playing");
        setTimeout(() => {
            changeKeyStyle.classList.remove("playing")
        }, 300);
    }

    // switch (event.keyCode) {
    //     case 65:
    //         music65.play();
    //         break;
    //     case 83:
    //         music83.play();
    //         break;
    //     case 68:
    //         music68.play();
    //         break;
    //     case 70:
    //         music70.play();
    //         break;
    //     case 71:
    //         music71.play();
    //         break;
    //     case 72:
    //         music72.play();
    //         break;
    //     case 74:
    //         music74.play();
    //         break;
    //     case 75:
    //         music75.play();
    //         break;
    //     case 76:
    //         music76.play();
    //         break;

    // }
})
