const hour = new Date().getHours();

if (hour >= 21 || hour < 6) {

    document.body.style.backgroundColor = "#333";

    const elements = document.querySelectorAll(
        "header, nav, main, article, aside, footer"
    );

    elements.forEach(function (element) {
        element.style.filter = "brightness(0.6)";
    });
}