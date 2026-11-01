const popup = document.getElementById("warningPopup");
const checkbox = document.getElementById("warningCheck");
const closeButton = document.getElementById("closeWarning");

const elements = document.querySelectorAll("main ol li p");

elements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        popup.style.display = "flex";
    });
});

checkbox.onchange = function () {
    closeButton.disabled = !checkbox.checked;
};

function closeWarning() {
    popup.style.display = "none";
}