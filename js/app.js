document.addEventListener("DOMContentLoaded", function () {
    const pageInit = function () {

    };

    const reset_button = document.querySelector(".app-controls button");
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