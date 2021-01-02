function addCards() {
    var index = FLASH_CARD_CONTROLLER.index;
    var vocab = FLASH_CARD_CONTROLLER.vocab;

    var card = document.createElement("div");
    card.style.width = "400px";
    card.style.height = "600px";
    card.style.backgroundColor = "#4DB6AC";
    card.style.padding = "0 20px";
    card.style.borderRadius = "8px";
    card.style.border = "3px solid #00695C";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";

    var sideOne = document.createElement("div");
    sideOne.id = "sideOne";
    sideOne.style.display = "flex";
    sideOne.style.flexDirection = "column";
    sideOne.style.justifyContent = "center";
    sideOne.style.alignItems = "center";

    var wordText = document.createElement("p");
    wordText.textContent = vocab[index].word;
    wordText.style.fontSize = "60px";
    wordText.id = "word";

    var sideOneWordContainer = document.createElement("div");
    sideOneWordContainer.style.height = "200px";
    sideOneWordContainer.appendChild(wordText);

    var flip1 = document.createElement("div");
    flip1.style.width = "200px";
    flip1.style.height = "200px";
    flip1.style.backgroundImage = "url(images/flip.png)";
    flip1.style.backgroundRepeat = "no-repeat";
    flip1.style.backgroundSize = "contain";
    flip1.style.cursor = "pointer";
    flip1.style.marginTop = "50px";
    flip1.onclick = function() {
        flipCard();
    };
    var sideOneFlipContainer = document.createElement("div");
    sideOneFlipContainer.style.height = "200px";
    sideOneFlipContainer.appendChild(flip1);

    sideOne.appendChild(sideOneWordContainer);
    sideOne.appendChild(sideOneFlipContainer);

    var sideTwo = document.createElement("div");
    sideTwo.id = "sideTwo";
    sideTwo.style.display = "flex";
    sideTwo.style.flexDirection = "column";
    sideTwo.style.justifyContent = "center";
    sideTwo.style.alignItems = "center";
    sideTwo.style.display = "none";
    
    var wordMeaning = document.createElement("p");
    wordMeaning.textContent = vocab[index].meaning;
    wordMeaning.style.fontSize = "30px";
    wordMeaning.id = "meaning";

    var sideTwoMeaningContainer = document.createElement("div");
    sideTwoMeaningContainer.style.height = "200px";
    sideTwoMeaningContainer.appendChild(wordMeaning);

    var flip2 = document.createElement("div");
    flip2.style.width = "200px";
    flip2.style.height = "200px";
    flip2.style.backgroundImage = "url(images/flip.png)";
    flip2.style.backgroundRepeat = "no-repeat";
    flip2.style.backgroundSize = "contain";
    flip2.style.cursor = "pointer";
    flip2.style.marginTop = "50px";
    flip2.onclick = function() {
        flipCard();
    };
    var sideTwoFlipContainer = document.createElement("div");
    sideTwoFlipContainer.style.height = "200px";
    sideTwoFlipContainer.appendChild(flip2);

    sideTwo.appendChild(sideTwoMeaningContainer);
    sideTwo.appendChild(sideTwoFlipContainer);

    card.appendChild(sideOne);
    card.appendChild(sideTwo);

    document.getElementById("wrapper").appendChild(card);
}