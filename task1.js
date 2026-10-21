
let directions = [
    {
        id: 1,
        name: "Виробництво автомобілів",
        department: "Виробничий відділ",
        governmentRelations: "Дотримання державних вимог щодо безпеки автомобілів.",
        readersDay1: 125,
        readersDay2: 118,
        duration: 12
    },
    {
        id: 2,
        name: "Гібридні технології",
        department: "Відділ гібридних технологій",
        governmentRelations: "Дотримання екологічних стандартів.",
        readersDay1: 98,
        readersDay2: 105,
        duration: 6
    },
    {
        id: 3,
        name: "Електромобілі",
        department: "Відділ електрифікації",
        governmentRelations: "Дотримання вимог сертифікації.",
        readersDay1: 143,
        readersDay2: 92,
        duration: 12
    },
    {
        id: 4,
        name: "Дослідження та розробки",
        department: "Науково-дослідний відділ",
        governmentRelations: "Дотримання законодавчих вимог.",
        readersDay1: 87,
        readersDay2: 76,
        duration: 24
    },
    {
        id: 5,
        name: "Безпека автомобілів",
        department: "Відділ автомобільної безпеки",
        governmentRelations: "Дотримання стандартів безпеки.",
        readersDay1: 112,
        readersDay2: 84,
        duration: 6
    },
    {
        id: 6,
        name: "Сервісне обслуговування",
        department: "Сервісний відділ",
        governmentRelations: "Дотримання прав споживачів.",
        readersDay1: 76,
        readersDay2: 69,
        duration: 3
    },
    {
        id: 7,
        name: "Запасні частини",
        department: "Відділ комплектувальних деталей",
        governmentRelations: "Дотримання стандартів якості.",
        readersDay1: 91,
        readersDay2: 76,
        duration: 24
    },
    {
        id: 8,
        name: "Екологічні технології",
        department: "Відділ екологічних розробок",
        governmentRelations: "Дотримання екологічних норм.",
        readersDay1: 134,
        readersDay2: 111,
        duration: 12
    },
    {
        id: 9,
        name: "Логістика та постачання",
        department: "Логістичний відділ",
        governmentRelations: "Дотримання митних правил.",
        readersDay1: 64,
        readersDay2: 58,
        duration: 1
    },
    {
        id: 10,
        name: "Цифрові автомобільні системи",
        department: "Відділ цифрових технологій",
        governmentRelations: "Дотримання вимог кібербезпеки.",
        readersDay1: 105,
        readersDay2: 92,
        duration: 6
    }
];

function sortDirections() {
    directions.sort(function (a, b) {
        return a.duration - b.duration;
    });

    console.log("Напрями за тривалістю:");
    console.table(directions);
}

function averageReaders() {
    let durations = [];

    for (let i = 0; i < directions.length; i++) {
        let duration = directions[i].duration;

        if (durations.includes(duration)) {
            continue;
        }

        durations.push(duration);

        let total = 0;
        let count = 0;

        for (let j = 0; j < directions.length; j++) {
            if (directions[j].duration == duration) {
                total += directions[j].readersDay1;
                total += directions[j].readersDay2;
                count += 2;
            }
        }

        console.log(
            "Тривалість:", duration,
            "місяців. Середня кількість читачів:", total / count
        );
    }
}

function findMinReaders() {
    let i = 1;
    let min = directions[0];

while (i < directions.length) {
    if (directions[i].readersDay2 < min.readersDay2) {
        min = directions[i];
    }
    i++;
}

    console.log("Напрям:", min.name);
    console.log("Відділ:", min.department);
    console.log("Читачів за день 2:", min.readersDay2);

    switch (true) {
    case min.readersDay2 < 70:
        console.log("Мала кількість читачів");
        break;
    case min.readersDay2 < 100:
        console.log("Середня кількість читачів");
        break;
    default:
        console.log("Велика кількість читачів");
}
}

function addDirection(newDirection) {
    
if (newDirection.id != null) {
    newDirection.id = Number(newDirection.id);
}

if (newDirection.name) {
    newDirection.name = String(newDirection.name);
}

let complete = Boolean(
    newDirection.id != null &&
    newDirection.name &&
    newDirection.department &&
    newDirection.governmentRelations &&
    newDirection.readersDay1 != null &&
    newDirection.readersDay2 != null &&
    newDirection.duration != null
);

    if (complete == false) {
        directions.push(newDirection);
        console.log("Неповний запис додано в кінець масиву.");
    } else {
        let position = directions.length;

        for (let i = 0; i < directions.length; i++) {
            if (newDirection.id < directions[i].id) {
                position = i;
                break;
            }
        }

        directions.splice(position, 0, newDirection);
        console.log("Повний запис додано за внутрішнім ID.");
    }
}

function calculateServices(services) {
    let coefficient;

    if (services.length <= 3) {
        coefficient = 0.95;
    } else {
        coefficient = 0.6;
    }

    for (let i = 0; i < services.length; i++) {
        let result = services[i].duration * coefficient;

        console.log(
            "Відділ:", services[i].department,
            "Нова тривалість:", result, "місяців"
        );
    }
}

console.log("=== 1. Сортування ===");
sortDirections();

console.log("=== Середня кількість читачів ===");
averageReaders();

console.log("=== 2. Мінімум читачів ===");
findMinReaders();

console.log("=== 3. Додавання напряму ===");
let newDirection = {
    id: 11,
    name: "Водневі технології",
    department: "Відділ альтернативної енергетики",
    governmentRelations: "Дотримання вимог екологічної безпеки.",
    readersDay1: 80,
    readersDay2: 73,
    duration: 18
};

addDirection(newDirection);
console.table(directions);

console.log("=== 4. Одночасні послуги ===");
let services = [
    { department: "Виробничий відділ", duration: 12 },
    { department: "Сервісний відділ", duration: 6 },
    { department: "Логістичний відділ", duration: 3 },
    { department: "Відділ електрифікації", duration: 24 }
];

calculateServices(services);



console.log(typeof directions);                  
console.log(typeof directions[0]);               
console.log(typeof directions[0].name);          
console.log(typeof directions[0].duration);      
let complete = true;
console.log(typeof complete);


console.log(directions.filter(d => d.duration >= 12));
console.log(directions.map(d => d.name));
console.log(directions.find(d => d.duration === 24));
console.log(directions.slice(0, 3));


let currentDate = new Date();

console.log(currentDate.getFullYear()); 
console.log(currentDate.getMonth() + 1); 
console.log(currentDate.getDate()); 
console.log(Math.round(4.7));
console.log(Math.max(12, 6, 24));
console.log(Math.sqrt(25));
let directionName = directions[0].name;
console.log(directionName.toUpperCase());
console.log(directionName.includes("автомобілів"));
console.log(directionName.slice(0, 5));