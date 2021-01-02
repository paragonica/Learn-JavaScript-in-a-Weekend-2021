const myShoppingList = shopping_list;
console.log(myShoppingList);

const jsonString = JSON.stringify(myShoppingList);
console.log(jsonString);

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.total);

jsonObject.contents.fruit[0].strawberries = "4 pints";
console.log(jsonObject);
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);