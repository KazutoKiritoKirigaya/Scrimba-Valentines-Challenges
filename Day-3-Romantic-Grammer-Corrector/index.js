document.getElementById("btn").addEventListener("click", correct)

function correct() {
    // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
    // It should read "Valentine's"
    // Render the corrected message to the DOM.
    var text = document.getElementById("paragraph");
    var text_Content = text.textContent.toLowerCase();
    var capText = text_Content.charAt(0).toUpperCase() + text_Content.slice(1);
    text.innerHTML = capText;
}
