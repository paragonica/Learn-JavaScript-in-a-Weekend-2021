function createUI() {
    setupBody();
    addHeader();
    addCards();
    addControls();

    FLASH_CARD_CONTROLLER.numWords = FLASH_CARD_CONTROLLER.vocab.length;
}