var FLASH_CARD_CONTROLLER = {
    index: 0,

    vocab: [
        { word: "animal", meaning: "something that lives and moves, but is not a human, bird, insect or fish" },
        { word: "brother", meaning: "a man or boy with the same parents as another person" },
        { word: "chance", meaning: "an occasion that allows something to be done" },
        { word: "day", meaning: "a period of 24 hours" },
        { word: "error", meaning: "a mistake" },
        { word: "father", meaning: "a male parent" },
        { word: "hour", meaning: "a period of 60 minutes" }
    ]    
};

function setupBody() {
    var body = document.getElementsByTagName("body")[0];

    var wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    wrapper.style.paddingTop = "100px";
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";

    body.style.fontFamily = "Arial, Helvetica, sans-serif";
    body.style.backgroundColor = "#E0F2F1";
    body.style.margin = 0;
    body.style.color = "#ECEFF1";
    body.appendChild(wrapper);
}

function changeWord(direction) {
    var wordText = document.getElementById("word");
    var meaningText = document.getElementById("meaning");

    var numWords = FLASH_CARD_CONTROLLER.numWords;
    var index = FLASH_CARD_CONTROLLER.index;
    var vocab = FLASH_CARD_CONTROLLER.vocab;

    if (direction === "previous") {
        if (index === 0) {
            index = numWords - 1;
        } else {
            index--;
        }
    } else {
        if (index === numWords - 1) {
            index = 0;
        } else {
            index++;
        }
    }

    FLASH_CARD_CONTROLLER.index = index;
    wordText.textContent = vocab[index].word;
    meaningText.textContent = vocab[index].meaning;
}

function flipCard() {
    var sideOne = document.getElementById("sideOne");
    var sideTwo = document.getElementById("sideTwo");

    if (sideOne.style.display == "none") {
        sideTwo.style.display = "none";
        sideOne.style.display = "flex";
    } else {
        sideOne.style.display = "none";
        sideTwo.style.display = "flex";
    }
}