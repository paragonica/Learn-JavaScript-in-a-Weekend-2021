function addHeader() {
    var logo = document.createElement("h1");
    logo.textContent = "Flash Card Wizard";

    var header = document.createElement("header");

    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.backgroundColor = "#00695C";
    header.style.padding = "0 20px";

    header.appendChild(logo);

    var wrapper = document.getElementById("wrapper");
    document.getElementsByTagName("body")[0].insertBefore(header, wrapper);
}