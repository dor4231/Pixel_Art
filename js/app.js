document.addEventListener("DOMContentLoaded", function () {
    const reset_button = document.querySelector(".app-controls button");
    const canvas = document.querySelector(".canvas");
    const colorPicker = document.querySelector(".app-controls input[type=color]");
    const appStyle = document.styleSheets[0];

    let mouseDown = false;
    let selectedColor = colorPicker.value;
    let canvasWidth = document.getElementById("width");
    // let canvasHeight = document.getElementById("height");


    const pageInit = function () {

        for (const rule of appStyle.cssRules){
            if (rule.selectorText === ".pixel") {
                console.log(rule.style["flex-basis"]);
                rule.style.flexBasis = (100 * (1/canvasWidth.value)).toString() + "%";
                console.log((100 * (1/canvasWidth.value)).toString() + "%");
            }

        }

    };


    ///////////////////
    // Event Listeners:
    ///////////////////

    colorPicker.addEventListener("blur", function() {
        selectedColor = colorPicker.value;
    });

    canvas.addEventListener("mousedown",function(event){
        if (event.target.nodeName === "DIV") {
            mouseDown = true;
        }
    }, true);

    canvas.addEventListener("mouseover",function(event){
        if (event.target.nodeName === "DIV" && mouseDown) {
            event.target.style.backgroundColor = selectedColor;
        }
    }, true);

    canvas.addEventListener("mouseup",function(event){
        if (event.target.nodeName === "DIV") {
            mouseDown = false;
        }
    }, true);

    reset_button.addEventListener("click", function (event) {
        event.preventDefault();
        const height = document.getElementById("height").value;
        const width = document.getElementById("width").value;

        const numOfPixels = height * width;
        canvas.innerHTML = "";
        for (let i = 0; i < numOfPixels; i++) {
            const div = document.createElement("div");
            div.classList.add("pixel");
            canvas.appendChild(div);
        }
        pageInit();
    })
});