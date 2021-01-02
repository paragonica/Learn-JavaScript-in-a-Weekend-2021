var getItemDetails = (itemText) => {
    var itemDetails = {};

    var match = itemText.match(/(^.*?) \((.*?)\)/);
    itemDetails["name"] = match[1];
    itemDetails["price"] = match[2];

    return itemDetails;
};

var addTableRow = (name, price) => {
    var row = document.createElement("tr");
    var fruit = document.createElement("td");
    var priceElem = document.createElement("td");
    var quantity = document.createElement("td");
    var total = document.createElement("td");

    fruit.textContent = name;
    priceElem.textContent = price;
    quantity.textContent = 1;
    total.textContent = getPrice(price);

    fruit.classList.add("fruit-name");
    priceElem.classList.add("fruit-price");
    quantity.classList.add("fruit-quantity");
    total.classList.add("fruit-total");

    row.appendChild(fruit);
    row.appendChild(priceElem);
    row.appendChild(quantity);
    row.appendChild(total);

    var tbody = document.getElementById("cart_items");
    tbody.appendChild(row);
    document.getElementById("shopping_cart").style.visibility = "visible";    
};

var getPrice = (priceString) => {
    return priceString.slice().replace(/\/.*/, "");
};

var getElementText = (parent, className) => {
    var text;

    var elements = parent.getElementsByClassName(className);

    if (elements && elements.length > 0) {
        text = elements[0].textContent;
    }
    return text;
};

var setElementText = (parent, className, value) => {
    var elements = parent.getElementsByClassName(className);

    if (elements && elements.length > 0) {
        elements[0].textContent = value;
    }
};