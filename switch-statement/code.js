function getProductInventory(fruit) {
    var count;

    switch(fruit) {
        case "banana":
            count = 100;
            break;
        case "blueberry":
        case "strawberry":
        case "blackberry":
        case "raspberry":
            count = {
                blueberry: 200,
                strawberry: 150,
                blackberry: 135,
                raspberry: 275
            };
            break;
        case "mango":
            count = 400;
            break;
        default:
            count = 0;
    }
    return count;
}
console.log(getProductInventory("mango"));
console.log(getProductInventory("blackberry"));
console.log(getProductInventory("apple"));