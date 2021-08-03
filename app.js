'use strict'
console.log('I am here');

// ------------------------Global Variables----------------------//

let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const storeSectionElem = document.getElementById('store');
const tableElem = document.createElement('table');
storeSectionElem.appendChild(tableElem);
// const formElem = document.getElementById('form');

// const allStores = [storeSeattle, storeTokyo, storeDubai, storeParis, storeLima];
const storeArray = [];

const storeSeattle = new Store('Seattle', 23, 65, 6.3);
const storeTokyo = new Store('Tokyo', 3, 24, 1.2);
const storeDubai = new Store('Dubai', 11, 38, 3.7);
const storeParis = new Store('Paris', 20, 38, 2.3);
const storeLima = new Store('Lima', 2, 16, 4.6);

// const storeChicago = new Store('Lima', 2, 16, 4.6);


//--------------------------------Constructor----------------------------//
// make a constructor to replace all instances of stores 

function Store(storeLocation, minHourlyCust, maxHourlyCust, avgCookieSale) {
  this.storeLocation = storeLocation;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookieSale = avgCookieSale;
  // maybe move avg cust per hour?
  this.avgCustPerHour = [];
  this.avgCookiesPerHour = [];
  // maybe move daily sales?
  this.dailySales = 0;

  // Store.allStores.push(this);
  storeArray.push(this);
  console.log(storeArray);
}

// Store.allStores = [];
// Store.storeArray = [];

//---------------------------Prototype Methods------------------------//

Store.prototype.calcAvgCust = function () {
  // this.avgCustPerHour = `${randomCust(this.minHourlyCust, this.maxHourlyCust)}`;
  // this.avgCustPerHour.push(randomCust(this.minHourlyCust, this.maxHourlyCust));
  return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust)
};

Store.prototype.calcAvgCookiesPerHour = function () {
  for (let i = 0; i < hoursOfOperation.length; i++) {
    this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.calcAvgCust()))
  }
};

Store.prototype.calcDailySales = function () {
  this.dailySales = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    this.dailySales += this.avgCookiesPerHour[i];
  }
};

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

renderHeader();

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

for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].renderStore()
}

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

  // td for final cell grand total
  // let globalGrandTotal = 0;
  // let x = [];
  // for (let i = 0; i < storeArray.length; i++) {
    // globalGrandTotal = globalGrandTotal + storeArray[i].dailySales;
    // x.push(globalGrandTotal);
    // console.log(x);
    // console.log(x[x.length - 1]);
    // let y = (x[x.length - 1])
    // console.log(y);
    // console.log(globalGrandTotal[globalGrandTotal.length - 1]);
    // if (i == storeArray[storeArray.length - 1]) {
      // return y;
      // console.log(y);
    // }
    // let globalGrandDailyTotalElem = document.createElement('td');
    // globalGrandDailyTotalElem.textContent = y;
    // footerElem.appendChild(globalGrandDailyTotalElem);
  // let globalGrandTotal = 0;
  // for (let i = 0; i < hoursOfOperation.length; i++) {
  //   globalGrandTotal += hoursOfOperation[i].avgCookiesPerHour;
  //   let globalGrandDailyTotalElem = document.createElement('td');
  //   globalGrandDailyTotalElem.textContent = globalGrandTotal;
  //   footerElem.appendChild(globalGrandDailyTotalElem);
  // }
}

renderFooter();

