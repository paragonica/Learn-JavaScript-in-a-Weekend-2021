function initializeUI() {
    addChatWindow();
    addDeleteIcon();
    setMessageHandler();
}

function setMessageHandler() {
    var messageInput = $(".message");

    messageInput.keydown(function(event) {
        if(event.keyCode == 13) {
            sendMessage(event.target);
        }
    });
}

function sendMessage(input) {
    var input = $(input);
    var message = input.val();
    var username = input.closest(".chat-container").find(".chat-title").find("h4").text();
    var chatHistory = $(".history").val();

    $(".history").val(username + ": " + message + "\n" + chatHistory);
    input.val("");
}

function addChatWindow() {
    var chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");

    var chatTitle = document.createElement("div");
    chatTitle.classList.add("chat-title");

    var userName = document.createElement("h4");
    userName.classList.add("username");
    userName.textContent = "Lizard Man";
    chatTitle.appendChild(userName);

    var chatArea = document.createElement("div");
    chatArea.classList.add("chat-area");

    var message = document.createElement("input");
    message.classList.add("message");
    message.type = "text";
    message.placeholder = "enter message";
    chatArea.appendChild(message);

    var lineBreak = document.createElement("br");
    chatArea.appendChild(lineBreak);

    var textArea = document.createElement("textarea");
    textArea.classList.add("history");
    textArea.readonly = true;
    chatArea.appendChild(textArea);

    chatContainer.appendChild(chatTitle);
    chatContainer.appendChild(chatArea);
    var chatWrapper = document.getElementById("chat_wrapper");
    chatWrapper.appendChild(chatContainer);
}

function addDeleteIcon() {
    var chatTitles = document.getElementsByClassName("chat-title");

    for (var x = 0;x < chatTitles.length;x++) {
        var deleteIcon = document.createElement("div");
        deleteIcon.classList.add("delete-icon");
        deleteIcon.innerHTML = "X";
        deleteIcon.onclick = function(event) {
            deleteChatWindow(event.target.parentElement);
        };
        chatTitles.item(x).appendChild(deleteIcon);
    }
}

function deleteChatWindow(titleContainer) {
    var chatContainer = titleContainer.parentElement;
    document.getElementById("chat_wrapper").removeChild(chatContainer);
}