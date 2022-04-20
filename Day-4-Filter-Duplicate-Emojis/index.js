document.getElementById("btn").addEventListener("click", filterDuplicates);
document.getElementById("btn-fav").addEventListener("click", addFav);
const emojis = [
    "💘",
    "💘",
    "🌞",
    "🧡",
    "🍇",
    "🧁",
    "⚡️",
    "💝",
    "🐱",
    "💘",
    "🧡",
    "💫",
    "🍓",
    "💜",
    "⚡️",
    "⚡️",
    "🐶",
    "💘",
    "🍇",
    "🐱",
    "💘",
    "💫",
    "🍓",
    "💜",
    "💕",
    "⚡️",
    "💘",
    "🌞",
    "🐱",
    "💘",
    "💫",
    "🍓",
    "💜",
    "⚡️",
    "🧡",
    "💕",
    "🍇",
    "💘",
];

const allEmojisP = document.getElementById("all-emojis-p");
const uniqueEmojisP = document.getElementById("unique-emojis-p");

for (let emoji of emojis) {
    allEmojisP.textContent += emoji;
}

function filterDuplicates() {
    // 1. Filter out all duplicate emojis, leaving only one of each emoji.
    let unique = [...new Set(emojis)].join(""); // ES^'s "Set" Object makes things a lot easier.
    // 2. Render the unique emojis in uniqueEmojisP.
    uniqueEmojisP.innerHTML = unique;
}

function addFav() {
    // Just for fun: Replace them with your favourite emojis! 😃
    let myFavEmojis = [
        "�",
        "🪐",
        "💻",
        "💃",
        "🍦",
        "🍜",
        "💜",
        "⛰️",
        "⛲",
        "🏛️",
        "🏙️️",
        "🏜️",
        "🐪",
    ];
    uniqueEmojisP.innerHTML = [...new Set(myFavEmojis)].join("");
}
