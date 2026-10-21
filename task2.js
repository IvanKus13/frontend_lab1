class User {
    constructor(lastName, firstName, age, education, feedbackPurpose, contactDate, contactTime) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.education = education;
        this.feedbackPurpose = feedbackPurpose;
        this.contactDate = contactDate;
        this.contactTime = contactTime;
    }
     showInfo() {
        console.log("Прізвище:", this.lastName);
        console.log("Ім'я:", this.firstName);
        console.log("Вік:", this.age);
    }
}

let users = [
    new User("Шевченко", "Іван", 20, "Вища", "Скарга на обслуговування", "2026-03-12", "10:30"),
    new User("Коваленко", "Олена", 35, "Вища", "Пропозиція щодо сайту", "2026-03-18", "14:15"),
    new User("Бондаренко", "Петро", 67, "Середня", "Запит інформації", "2026-04-05", "18:20"),
    new User("Мельник", "Анна", 25, "Вища", "Подяка за послугу", "2026-04-11", "11:00"),
    new User("Ткаченко", "Олег", 72, "Середня", "Скарга на обслуговування", "2026-04-20", "20:10"),
    new User("Кравченко", "Марія", 42, "Вища", "Пропозиція щодо сайту", "2026-05-03", "09:45"),
    new User("Олійник", "Андрій", 30, "Середня", "Запит інформації", "2026-05-15", "16:30"),
    new User("Поліщук", "Наталія", 65, "Вища", "Подяка за послугу", "2026-05-22", "19:00"),
    new User("Лисенко", "Максим", 19, "Середня", "Скарга на обслуговування", "2026-06-08", "12:00"),
    new User("Савченко", "Ірина", 55, "Вища", "Запит інформації", "2026-06-17", "08:30")
];


function showUsersByMonth(month) {
    console.log("Користувачі за місяць:", month);

    for (let i = 0; i < users.length; i++) {
        let userMonth = users[i].contactDate.substring(5, 7);

        if (userMonth == month) {
            console.log(
                users[i].lastName,
                users[i].firstName,
                users[i].contactDate,
                users[i].contactTime,
                users[i].feedbackPurpose
            );
        }
    }
}

showUsersByMonth("04");



function calculateAverageAge() {
    let total = 0;

    for (let i = 0; i < users.length; i++) {
        total += users[i].age;
    }

    let average = total / users.length;

    console.log("Середній вік користувачів:", average);
}

calculateAverageAge();



function classifyUsers() {
    let middleWorking = 0;
    let elderlyNonWorking = 0;
    let others = 0;

    for (let i = 0; i < users.length; i++) {
        let age = users[i].age;
        let time = users[i].contactTime;

        if (age >= 18 && age < 60 &&
            time >= "09:00" && time <= "17:00") {
            middleWorking++;
        } else if (age >= 60 &&
            (time < "09:00" || time > "17:00")) {
            elderlyNonWorking++;
        } else {
            others++;
        }
    }

    console.log("Середній вік, робочий час:", middleWorking);
    console.log("Похилого віку, неробочий час:", elderlyNonWorking);
    console.log("Інші:", others);
}

classifyUsers();



function sortUsers() {
    users.sort(function (a, b) {
        return a.lastName.localeCompare(b.lastName, "uk");
    });

    for (let i = 0; i < users.length; i++) {
        console.log(
            users[i].lastName,
            users[i].firstName,
            "-",
            users[i].feedbackPurpose
        );
    }
}

sortUsers();



let user = new User(
    "Іваненко", "Іван", 20, "Вища",
    "Консультація", "2026-10-19", "12:00"
);

user.showInfo();

