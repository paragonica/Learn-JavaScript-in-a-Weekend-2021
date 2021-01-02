function addControls() {
    var controls = document.createElement("div");
    controls.style.display = "flex";
    controls.style.justifyContent = "space-between";
    controls.style.alignItems = "center";
    controls.style.width = "150px";
    controls.style.backgroundColor = "#CFD8DC";
    controls.style.marginTop = "40px";
    controls.style.borderRadius = "10px";
    controls.style.border = "1px solid #455A64";
    controls.style.padding = "8px";

    var previous = document.createElement("div");
    previous.style.width = "48px";
    previous.style.height = "48px";
    previous.style.backgroundImage = "url(images/previous.png)";
    previous.style.backgroundRepeat = "no-repeat";
    previous.style.backgroundSize = "contain";
    previous.style.cursor = "pointer";
    previous.onclick = function() {
        changeWord("previous");
    };
    
    var next = document.createElement("div");
    next.style.width = "48px";
    next.style.height = "48px";
    next.style.backgroundImage = "url(images/next.png)";
    next.style.backgroundRepeat = "no-repeat";
    next.style.backgroundSize = "contain";
    next.style.cursor = "pointer";
    next.onclick = function() {
        changeWord("next");
    };

    controls.appendChild(previous);
    controls.appendChild(next);

    document.getElementById("wrapper").appendChild(controls);
}