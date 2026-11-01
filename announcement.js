const announcementElement = document.getElementById("announcement");

const announcementText =
    "Увага! У святкові дні графік роботи корпорації може змінюватися.";

if (announcementElement) {
    let currentPosition = 0;
    const typingDelay = 50;

    function typeAnnouncement() {
        if (currentPosition >= announcementText.length) {
            return;
        }

        announcementElement.textContent +=
            announcementText[currentPosition];

        currentPosition++;

        setTimeout(typeAnnouncement, typingDelay);
    }

    typeAnnouncement();
}
const welcome = document.getElementById("welcome");

welcome.textContent = "Ласкаво просимо на сайт Toyota!";

const paragraphs = document.getElementsByTagName("p");
