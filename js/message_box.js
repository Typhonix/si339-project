function submitmessage() {
    let name = document.querySelector("#name").value;
    let message = document.querySelector("#message").value;
    pushdown();
    document.querySelector("#saved1").textContent = name + ": " + message;
    let queued_messages = [];
    if (message.toLowerCase().includes("music")) {
        queued_messages.push(" I have been playing piano since I was 4 years old, and clarinet since I was 10.");
    }
    if (message.toLowerCase().includes("pet")) {
        queued_messages.push(" I had a pet rabbit named Dot that had a big black dot on his left eye.");
    }
    if (message.toLowerCase().includes("birthday")) {
        queued_messages.push(" I am 21 years old and my birthday is July 3rd, 2001.");
    }
    if (message.toLowerCase().includes("color")) {
        queued_messages.push(" I would say my favorite color is black if that counts, or red if it doesn't.");
    }
    if (message.toLowerCase().includes("food")) {
        queued_messages.push(" I usually say my favorite food is sushi, but in reality I have a hard time choosing a favorite.");
    }
    setTimeout(function() {
        pushdown();
        if (queued_messages.length > 0) {
            let reply = "Austin: Hi " + name + ",";
            for (i = 0; i < queued_messages.length; i++) {
                reply += queued_messages[i];
            }
            document.querySelector("#saved1").textContent = reply;
        }
        else {
            document.querySelector("#saved1").textContent = "Austin: Hi " + name + ", thank you for your message!";
        }
    }, 1000);
    document.querySelector("#name").value = "";
    document.querySelector("#message").value = "";
}

function pushdown() {
    for (let i = 4; i > 1; i--) {
        let text_to_change = "#saved" + String(i);
        let text_to_del = "#saved" + String(i-1);
        console.log(document.querySelector(text_to_del).textContent);
        document.querySelector(text_to_change).textContent = document.querySelector(text_to_del).textContent;
        document.querySelector(text_to_del).textContent = "";
    }
}