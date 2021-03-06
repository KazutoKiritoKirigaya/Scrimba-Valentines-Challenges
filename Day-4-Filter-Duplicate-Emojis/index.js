document.getElementById("btn").addEventListener("click", filterDuplicates);
document.getElementById("btn-fav").addEventListener("click", addFav);
const emojis = [
    "๐",
    "๐",
    "๐",
    "๐งก",
    "๐",
    "๐ง",
    "โก๏ธ",
    "๐",
    "๐ฑ",
    "๐",
    "๐งก",
    "๐ซ",
    "๐",
    "๐",
    "โก๏ธ",
    "โก๏ธ",
    "๐ถ",
    "๐",
    "๐",
    "๐ฑ",
    "๐",
    "๐ซ",
    "๐",
    "๐",
    "๐",
    "โก๏ธ",
    "๐",
    "๐",
    "๐ฑ",
    "๐",
    "๐ซ",
    "๐",
    "๐",
    "โก๏ธ",
    "๐งก",
    "๐",
    "๐",
    "๐",
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
    // Just for fun: Replace them with your favourite emojis! ๐
    let myFavEmojis = [
        "๏ฟฝ",
        "๐ช",
        "๐ป",
        "๐",
        "๐ฆ",
        "๐",
        "๐",
        "โฐ๏ธ",
        "โฒ",
        "๐๏ธ",
        "๐๏ธ๏ธ",
        "๐๏ธ",
        "๐ช",
    ];
    uniqueEmojisP.innerHTML = [...new Set(myFavEmojis)].join("");
}
