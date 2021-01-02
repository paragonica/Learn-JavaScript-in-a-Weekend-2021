function initializeUI() {
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