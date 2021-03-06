'use strict'
console.log('I am here');

// ------------------------Global Variables----------------------//

let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const storeSectionElem = document.getElementById('store');
const tableElem = document.createElement('table');
storeSectionElem.appendChild(tableElem);
const formDivElem = document.getElementById('form');
// tableElem.appendChild(formDivElem);

const storeArray = [];

// const storeSeattle = new Store('Seattle', 23, 65, 6.3);
// const storeTokyo = new Store('Tokyo', 3, 24, 1.2);
// const storeDubai = new Store('Dubai', 11, 38, 3.7);
// const storeParis = new Store('Paris', 20, 38, 2.3);
// const storeLima = new Store('Lima', 2, 16, 4.6);

//--------------------------------Constructor----------------------------//
// make a constructor to replace all instances of stores 

function Store(storeLocation, minHourlyCust, maxHourlyCust, avgCookieSale) {
  this.storeLocation = storeLocation;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookieSale = avgCookieSale;
  this.avgCustPerHour = [];
  this.avgCookiesPerHour = [];
  this.dailySales = 0;

  storeArray.push(this);
  console.log(storeArray);
}

//---------------------------Prototype Methods------------------------//

Store.prototype.calcAvgCust = function () {
  return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust)
}

Store.prototype.calcAvgCookiesPerHour = function () {
  for (let i = 0; i < hoursOfOperation.length; i++) {
    this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.calcAvgCust()))
  }
}

Store.prototype.calcDailySales = function () {
  this.dailySales = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    this.dailySales += this.avgCookiesPerHour[i];
  }
}

//-------------------------Global Functions--------------------------//

// create a table to display sales data
// make a function to create a header row

function renderHeader() {
  let headerElem = document.createElement('tr');
  tableElem.appendChild(headerElem);

  let blankSpace1 = document.createElement('td');
  blankSpace1.textContent = '';
  headerElem.appendChild(blankSpace1);

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let hoursElem = document.createElement('td');
    hoursElem.textContent = hoursOfOperation[i];
    headerElem.appendChild(hoursElem);    
  }

  let locationDailyTotalElem = document.createElement('td');
  locationDailyTotalElem.textContent = 'Total';
  headerElem.appendChild(locationDailyTotalElem);
}

// renderHeader();

// function that renders and populates table body

Store.prototype.renderStore = function () {
  this.calcAvgCookiesPerHour();
  this.calcDailySales();

  let trElem = document.createElement('tr');
  tableElem.appendChild(trElem);

  let tdElem = document.createElement('td');
  tdElem.textContent = `${this.storeLocation}`;
  trElem.appendChild(tdElem);

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let td2Elem = document.createElement('td');
    td2Elem.textContent = `${this.avgCookiesPerHour[i]}`;
    trElem.appendChild(td2Elem);
  }
  let totalElem = document.createElement('td');
  totalElem.textContent = `${this.dailySales}`;
  trElem.appendChild(totalElem);
}
// storeSeattle.renderStore();

// for (let i = 0; i < storeArray.length; i++) {
//   storeArray[i].renderStore()
// }

// make a function to create a header row for the footer

function renderFooter() {
  let footerElem = document.createElement('tr');
  tableElem.appendChild(footerElem);
  // td for blank space
  let blankSpace2 = document.createElement('td');
  blankSpace2.textContent = 'Totals/hr';
  footerElem.appendChild(blankSpace2);

  let globalGrandTotal = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let globalHourlyTotal = 0;
    for (let j = 0; j < storeArray.length; j++) {
    globalHourlyTotal += storeArray[j].avgCookiesPerHour[i];
    }
    // td's for hourly global totals
    let globalHourlyTotalElem = document.createElement('td');
    globalHourlyTotalElem.textContent = globalHourlyTotal;
    footerElem.appendChild(globalHourlyTotalElem);

    globalGrandTotal += globalHourlyTotal;
    globalHourlyTotal = 0;
  }
  let globalGrandDailyTotalElem = document.createElement('td');
  globalGrandDailyTotalElem.textContent = globalGrandTotal;
  footerElem.appendChild(globalGrandDailyTotalElem);
}


// -----------------------------click handler and event listener-------------------------//

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
  // function Store(storeLocation, minHourlyCust, maxHourlyCust, avgCookieSale) {
  let storeLocation = e.target.location.value;
  let minHourlyCust = e.target.minCust.value;
  let maxHourlyCust = e.target.maxCust.value;
  let avgCookieSale = e.target.avgSale.value;

  let newStore = new Store(storeLocation, minHourlyCust, maxHourlyCust, avgCookieSale);
  newStore.calcAvgCookiesPerHour();
  newStore.calcDailySales();  
  // newStore.renderStore();

  // clear table to prepare to re-render
  tableElem.innerHTML = '';


  renderHeader();
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].renderStore()
  }
  renderFooter();

  // clear form after 'submit'
  e.target.reset();
}

formDivElem.addEventListener('submit', handleSubmit);


const storeSeattle = new Store('Seattle', 23, 65, 6.3);
const storeTokyo = new Store('Tokyo', 3, 24, 1.2);
const storeDubai = new Store('Dubai', 11, 38, 3.7);
const storeParis = new Store('Paris', 20, 38, 2.3);
const storeLima = new Store('Lima', 2, 16, 4.6);



// ------------------------------Render the Table--------------------------------//

renderHeader();

for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].renderStore()
}

renderFooter();

