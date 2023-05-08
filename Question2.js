const csvString = `First Name,Last Name,Age
Onome,Ehigiator,45
Adegoke,Akeem-omosanya,67
Bukola,Ehigiator,66
Olufunmi,Aremu,34
Ifeanyichukwu,Ekwueme,54
Isioma,Mustapha,57
Ayebatari,Joshua,25
Nnamdi,Olawale,76
Lola,Abosede,45
Emeka,Oyelude,34
Aminu,Ogunbanwo,67
Simisola,Ekwueme,98
Ayebatari,Busari,56
Chinyere,Uchechi,52
Adeboye,Jamiu,84
Titilayo,Kimberly,56
Chimamanda,Ehigiator,34
Bukola,Adegoke,57
Cherechi,Elebiyo,59
Titilayo,Afolabi,90`;

const rows = csvString.split("\n"); 
const header = rows[0].split(",");
const staffRecords = rows.slice(1).map(row => row.split(","));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How do you want to sort the staff records?\n1. Sort by First Name\n2. Sort by Last Name\n3. Sort by Age\n', (answer) => {
    let sortedStaffRecords = [];
    switch (answer) {
        case "1":
            sortedStaffRecords = staffRecords.sort((a, b) => a[0].localeCompare(b[0]));
            break;
        case "2":
            sortedStaffRecords = staffRecords.sort((a, b) => a[1].localeCompare(b[1]));
            break;
        case "3":
            sortedStaffRecords = staffRecords.sort((a, b) => parseInt(a[2]) - parseInt(b[2]));
            break;
        default:
            console.log("Invalid input.");
            break;
    }

    
    console.log("Sorted Staff Records:");
    console.log("| First Name        | Last Name         | Age  |");
    sortedStaffRecords.forEach(record => {
        console.log(`| ${record[0].padEnd(18)} | ${record[1].padEnd(18)} | ${record[2].padEnd(4)} |`);
    });

    rl.close();
});

