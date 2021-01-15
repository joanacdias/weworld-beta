function toggleChatBar() {
    const chatContainer = document.getElementById("chat-container")
    const toggleChatbarBtn = document.getElementById("toggle-chatbar-btn")

    if (chatContainer.classList.contains("chat-container-closed")) {
        chatContainer.classList.remove("chat-container-closed")
        toggleChatbarBtn.classList.remove("toggle-chatbar-btn-chatbar-closed")
    } else {
        chatContainer.classList.add("chat-container-closed")
        toggleChatbarBtn.classList.add("toggle-chatbar-btn-chatbar-closed")
    }
}

function testChat() {
    console.log('hello');
}

function addLocalChatBubble(id, msg) {
    const chat = document.getElementById("chat");
    const playerSpeech = document.createElement("div");

    playerSpeech.setAttribute("id", "local-player-msg-bubble");
    playerSpeech.innerHTML = `<p class="player-id">${id}</p> <p class="player-message">${msg}</p>`;

    chat.appendChild(playerSpeech);
}

function addRemoteChatBubble(id, msg) {
    const chat = document.getElementById("chat");
    const playerSpeech = document.createElement("div");

    playerSpeech.setAttribute("id", "remote-player-msg-bubble");
    playerSpeech.innerHTML = `<p class="player-id">${id}</p> <p class="player-message">${msg}</p>`;

    chat.appendChild(playerSpeech);
}