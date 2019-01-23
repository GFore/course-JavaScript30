// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


function createHTMLTableFromArrayOfObjects(myArray, myContainer) {
    // myArray is an array of objects that is to be displayed as an HTML table inside parent
    // element myContainer. Each object in myArray will be a single row in the table, with the
    // table headers coming from the keys of the first object in myArray.

    if (myArray.length < 1) {
        myContainer.textContent = "No data provided"
        return;
    }

    // Create the header row using the keys from the first object in myArray
    let headerRow = '<thead><tr>';
    let headers = Object.keys(myArray[0]).map(x => `<th>${x.toUpperCase()}</th>`);

    headers.forEach(heading => {headerRow += heading;});
    headerRow += "</tr></thead>";
    
    // Create the body rows
    let bodyRows = '<tbody>';
    myArray.forEach(row => {
        let addRow = '<tr>';
        let rowData = Object.values(row).map(x => `<td>${x}</td>`);

        rowData.forEach(item => {addRow += item;});
        addRow += "</tr>";
        bodyRows += addRow;
    })
    bodyRows += "</tr></tbody>";

    // Now combine the header and rows to build the table display in myContainer
    myContainer.innerHTML += headerRow + bodyRows;
    return;
}

const container = document.querySelector('[data-ex01]');
createHTMLTableFromArrayOfObjects(inventors, container);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);
const container01 = document.querySelector('[data-ans01]');
createHTMLTableFromArrayOfObjects(bornIn1500s, container01);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const names = inventors.map(inventor => { 
    return {first: inventor.first, last: inventor.last }
});
const container02 = document.querySelector('[data-ans02]');
createHTMLTableFromArrayOfObjects(names, container02);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedByBirth = inventors.sort((a, b) => {
    return (a.year < b.year) ? -1 : 1; 
});
console.log(sortedByBirth);
const container03 = document.querySelector('[data-ans03]');
createHTMLTableFromArrayOfObjects(sortedByBirth, container03);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];