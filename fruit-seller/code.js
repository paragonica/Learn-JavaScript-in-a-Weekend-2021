addFruit = (elem) => {
    var fruitText = elem.parentElement.textContent;

    var { name, price } = getItemDetails(fruitText);

    updateTableRow(name, price);
    updateTableTotals();
};

updateTableRow = (fruitName, fruitPrice) => {
    var tbody = document.getElementById("cart_items");
    var itemRows = tbody.getElementsByTagName("tr");
    var foundFruit = false;

    if (itemRows.length > 0) {
        for (row of itemRows) {
            var name = getElementText(row, "fruit-name");

            if (fruitName == name) {
                updateRow(row);

                foundFruit = true;
                break;
            }
        }
    }

    if (!foundFruit) {
        addTableRow(fruitName, fruitPrice);
    }
};

updateRow = (tableRow) => {
    var price = getElementText(tableRow, "fruit-price");
    var quantity = getElementText(tableRow, "fruit-quantity");
    var total = getElementText(tableRow, "fruit-total");

    price = parseFloat(getPrice(price));
    quantity = parseFloat(quantity);
    total = parseFloat(total);

    quantity += 1;
    total += price;

    setElementText(tableRow, "fruit-quantity", quantity);
    setElementText(tableRow, "fruit-total", total.toFixed(2));
};

updateTableTotals = () => {
    var tbody = document.getElementById("cart_items");
    var itemRows = tbody.getElementsByTagName("tr");

    var orderSubtotal = 0;
    var orderDiscount = 0;
    var orderTotal = 0;

    if (itemRows.length > 0) {
        for (row of itemRows) {
            var total = parseFloat(getElementText(row, "fruit-total"));
            orderSubtotal += total;
        }

        if (orderSubtotal >= 30.00) {
            orderTotal = orderSubtotal * .9;
            orderDiscount = orderSubtotal * .1;

            document.getElementById("subtotal").textContent = orderSubtotal.toFixed(2);
            document.getElementById("discount").textContent = "-" + orderDiscount.toFixed(2);
            document.getElementById("subtotal_row").style.display = "table-row";
            document.getElementById("discount_row").style.display = "table-row";
        } else {
            orderTotal = orderSubtotal;
        }
        document.getElementById("total").textContent = orderTotal.toFixed(2);
    }
};