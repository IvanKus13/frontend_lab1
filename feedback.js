const details = document.querySelector("#details");
const tooltip = document.getElementById("tooltip");

details.addEventListener("mouseenter", function () {
    details.classList.add("active");
    tooltip.style.display = "block";
});

details.addEventListener("mouseleave", function () {
    details.classList.remove("active");
    tooltip.style.display = "none";
});