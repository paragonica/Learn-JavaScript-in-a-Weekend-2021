function calculateOrder() {
    var smallQuantityInput = document.getElementById("small");
    var mediumQuantityInput = document.getElementById("medium");
    var largeQuantityInput = document.getElementById("large");

    var numSmallPizzas = parseInt(smallQuantityInput.value, 10);
    var numMediumPizzas = parseInt(mediumQuantityInput.value,10);
    var numLargePizzas = parseInt(largeQuantityInput.value, 10);

    var priceSmall = 14.00;
    var priceMedium = 18.00;
    var priceLarge = 22.00;

    var totalPizzas = numSmallPizzas + numMediumPizzas + numLargePizzas;

    if (totalPizzas >= 5) {
        priceSmall = 12.60;
        priceMedium = 16.20;
        priceLarge = 19.80;
    }

    var totalCost = (numSmallPizzas * priceSmall) + 
        (numMediumPizzas * priceMedium) + 
        (numLargePizzas * priceLarge);

    var totalInput = document.getElementById("total");
    totalInput.value = totalCost.toFixed(2);
}