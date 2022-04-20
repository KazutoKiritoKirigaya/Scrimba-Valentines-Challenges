const body = document.body;
const docEl = document.documentElement;
const heart = document.getElementById("heart");
document.getElementById("btn").addEventListener("click", changeColor);

function changeColor() {
    // 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
    fetch("https://apis.scrimba.com/hexcolors/?count=2")
        .then((res) => res.json())
        .then((dt) => {
            body.style.setProperty("background-color", dt.colors[0].value); // 2. Use that color to update the background color of the body.
            document
                .getElementById("heart")
                .style.setProperty("--heart", data.colors[0].value);
        });
}
