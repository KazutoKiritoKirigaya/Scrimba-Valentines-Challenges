const greetingDisplay = document.getElementById("greeting-display");

const form = document.getElementById("form");
form.addEventListener("input", writeGreeting);

function writeGreeting() {
    // Write a function update the message in the greeting-display paragraph each time the form is updated.
    const recipientInput = document.getElementById("recipient-input").value;
    const greetingSelect = document.getElementById("greeting-select").value;
    const senderInput = document.getElementById("sender-input").value;
    greetingDisplay.textContent = `Hey, ${recipientInput}!\n${greetingSelect}\nFrom, ${senderInput}`;
}
