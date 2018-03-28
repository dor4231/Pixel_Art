document.addEventListener("DOMContentLoaded", function () {
    const reset_button = document.querySelector(".app-controls button");
    const canvas = document.querySelector(".canvas");

    let mouseDown = false;
    let selectedColor = "#a00";
    const pageInit = function () {

    };





    ///////////////////
    // Event Listeners:
    ///////////////////

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

        for (let i = 0; i < numOfPixels; i++) {
            const div = document.createElement("div");
            div.classList.add("pixel");
            document.querySelector(".canvas").appendChild(div);
        }
    })
});