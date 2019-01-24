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

function createHTMLListFromArray(myArray, myContainer) {
    // myArray is an array of items that is to be displayed as an HTML list inside parent
    // element myContainer, which is either an <ol> or an <ul> element

    if (myArray.length < 1) {
        myContainer.textContent = "No data provided"
        return;
    }

    // Create the body rows
    let listItems = '';
    myArray.forEach(item => {
        listItems += `<li>${item}</li>`;
    });

    myContainer.innerHTML = listItems;
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
const container03 = document.querySelector('[data-ans03]');
createHTMLTableFromArrayOfObjects(sortedByBirth, container03);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const reducer = (years, inventor) => years + (inventor.passed - inventor.year);
const totalYears = inventors.reduce(reducer, 0);
document.querySelector('[data-ans04]').textContent = totalYears + " years";


// 5. Sort the inventors by years lived
const sortedByAge = [];
inventors.forEach(x => {
    x.age = x.passed - x.year;
    sortedByAge.push(x);
})

sortedByAge.sort((a, b) => {
    return (a.age < b.age) ? -1 : 1; 
})

const container05 = document.querySelector('[data-ans05]');
createHTMLTableFromArrayOfObjects(sortedByAge, container05);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const uls = document.querySelector('[data-blvd]');
let blvds = Array.from(uls.querySelectorAll('li'));
blvds = blvds.map(x => {return {'Boulevard' : x.textContent}})
             .filter(x => x.Boulevard.includes('de'));

const container06 = document.querySelector('[data-ans06]');
createHTMLTableFromArrayOfObjects(blvds, container06);

// 7. sort Exercise
// Sort the people alphabetically by last name
let people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'].sort((a,b) => {return a[3] < b[4] ? -1 : 1});

const nameList = document.querySelector('[data-names]');
createHTMLListFromArray(people, nameList);

let peopleSorted = [...people];
peopleSorted
    .sort((a, b) => {
        const [aLast, aFirst] = a.split(', ');
        const [bLast, bFirst] = b.split(', ');
        return (aFirst < bFirst) ? -1 : 1;
    })
    .sort((a, b) => {
        const [aLast, aFirst] = a.split(', ');
        const [bLast, bFirst] = b.split(', ');
        return (aLast < bLast) ? -1 : 1;
    })

const nameListSorted = document.querySelector('[data-container07]');
createHTMLListFromArray(peopleSorted, nameListSorted);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const wordList = document.querySelector('[data-words]');
createHTMLListFromArray(data, wordList);

let countedWords = Object.entries(data.reduce((allWords, word) => { 
    // if (word in allWords) {
    //   allWords[word]++;
    // } else {
    //   allWords[word] = 1;
    // }

    // alternate method:
    if (!allWords[word]) {allWords[word] = 0};
    allWords[word]++;

    return allWords;
  }, {})).map(x => `${x[0]} (${x[1]})`);

  const wordCount = document.querySelector('[data-container08]');
  createHTMLListFromArray(countedWords, wordCount);