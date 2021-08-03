'use strict'
console.log('I am here');

// ------------------------Global Variables----------------------//

let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const storeSectionElem = document.getElementById('store');
const tableElem = document.createElement('table');
storeSectionElem.appendChild(tableElem);
// const formElem = document.getElementById('form');

// const allStores = [storeSeattle, storeTokyo, storeDubai, storeParis, storeLima];



//--------------------------Old Store Objects--------------------//
// refactor instances of stores to feed through the constructor

// const storeSeattle = {
// storeLocation: 'Seattle',
// minHourlyCust: 23,
// maxHourlyCust: 65,
// avgCookieSale: 6.3,
// avgCustPerHour: [],
// avgCookiesPerHour: [],
// calcAvgCust: function() {
//   this.avgCustPerHour = randomCust(23, 65)
// },
// calcAvgCookiesPerHour: function() {
//   this.avgCookiesPerHour = []
//   for (let i = 0; i < hoursOfOperation.length; i++) {
//     this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]))
//   }
// },
//   dailySales: 0,
//   calcDailySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.dailySales += this.avgCookiesPerHour[i];      
//     }
//   }
// }

// const storeTokyo = {
//   storeLocation: 'Tokyo',
//   minHourlyCust: 3,
//   maxHourlyCust: 24,
//   avgCookieSale: 1.2,
//   avgCustPerHour: [],
//   calcAvgCust: function() {
//     this.avgCustPerHour = randomCust(3, 24)
//   },
//   avgCookiesPerHour: [],
//   calcAvgCookiesPerHour: function () {
//     this.avgCookiesPerHour = []
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]))
//     }
//   },
//   dailySales: 0,
//   calcDailySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.dailySales += this.avgCookiesPerHour[i];      
//     }
//   }
// }

// const storeDubai = {
//   storeLocation: 'Dubai',
//   minHourlyCust: 11,
//   maxHourlyCust: 38,
//   avgCookieSale: 3.7,
//   avgCustPerHour: [],
//   calcAvgCust: function() {
//     this.avgCustPerHour = randomCust(11, 38)
//   },
//   avgCookiesPerHour: [],
//   calcAvgCookiesPerHour: function () {
//     this.avgCookiesPerHour = []
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]))
//     }
//   },
//   dailySales: 0,
//   calcDailySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.dailySales += this.avgCookiesPerHour[i];      
//     }
//   }
// }

// const storeParis = {
//   storeLocation: 'Paris',
//   minHourlyCust: 20,
//   maxHourlyCust: 38,
//   avgCookieSale: 2.3,
//   avgCustPerHour: [],
//   calcAvgCust: function() {
//     this.avgCustPerHour = randomCust(20, 38)
//   },
//   avgCookiesPerHour: [],
//   calcAvgCookiesPerHour: function () {
//     this.avgCookiesPerHour = []
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]))
//     }
//   },
//   dailySales: 0,
//   calcDailySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.dailySales += this.avgCookiesPerHour[i];      
//     }
//   }
// }

// const storeLima = {
//   storeLocation: 'Lima',
//   minHourlyCust: 2,
//   maxHourlyCust: 16,
//   avgCookieSale: 4.6,
//   avgCustPerHour: [],
//   calcAvgCust: function() {
//     this.avgCustPerHour = randomCust(2, 16)
//   },
//   avgCookiesPerHour: [],
//   calcAvgCookiesPerHour: function () {
//     this.avgCookiesPerHour = []
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]));
//     }
//   },
//   dailySales: 0,
//   calcDailySales: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.dailySales += this.avgCookiesPerHour[i];      
//     }
//   }
// }

const storeArray = [];
// storeSeattle, storeTokyo, storeDubai, storeParis, storeLima

const storeSeattle = new Store('Seattle', 23, 65, 6.3);
// storeSeattle.avgCustPerHour;
// storeSeattle.avgCookiesPerHour;
// storeSeattle.dailySales;

const storeTokyo = new Store('Tokyo', 3, 24, 1.2);
// storeTokyo.avgCustPerHour;
// storeTokyo.avgCookiesPerHour;
// storeTokyo.dailySales;

const storeDubai = new Store('Dubai', 11, 38, 3.7);
// storeDubai.avgCustPerHour;
// storeDubai.avgCookiesPerHour;
// storeDubai.dailySales;

const storeParis = new Store('Paris', 20, 38, 2.3);
// storeParis.avgCustPerHour;
// storeParis.avgCookiesPerHour;
// storeParis.dailySales;

const storeLima = new Store('Lima', 2, 16, 4.6);
// storeLima.avgCustPerHour;
// storeLima.avgCookiesPerHour;
// storeLima.dailySales;

// const storeChicago = new Store('Chicago', 14, 2, 5.7);

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

// function that renders and populates table

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
blankSpace2.textContent = '';
footerElem.appendChild(blankSpace2);

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let globalHourlyTotal = 0;
    for (let j = 0; j < storeArray.length; j++) {
      globalHourlyTotal += storeArray[j].avgCookiesPerHour[i];
    }
    // td's for hourly global totals
    let globalHourlyTotalElem = document.createElement('td');
    globalHourlyTotalElem.textContent = globalHourlyTotal;
    footerElem.appendChild(globalHourlyTotalElem);
  }
// td for grand total
let globalGrandDailyTotalElem = document.createElement('td');
globalGrandDailyTotalElem.textContent = 'fill me';
footerElem.appendChild(globalGrandDailyTotalElem);
}

renderFooter();


//-------------------------------Global Functions---------------------//

// make 5 separate render methods that append each store to the table

// function renderSeattle(store) {

// };


// function renderStore(store) {

//   storeSeattle.calcAvgCookiesPerHour();
//   storeTokyo.calcAvgCookiesPerHour();
//   storeDubai.calcAvgCookiesPerHour();
//   storeParis.calcAvgCookiesPerHour();
//   storeLima.calcAvgCookiesPerHour();
  
//   storeSeattle.calcDailySales();
//   storeTokyo.calcDailySales();
//   storeDubai.calcDailySales();
//   storeParis.calcDailySales();
//   storeLima.calcDailySales();

//   let articleElem = document.createElement('article')
//   storeSectionElem.appendChild(articleElem);

//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = `${store.storeLocation}`;
//   articleElem.appendChild(h2Elem);

//   let pElem = document.createElement('p');
//   pElem.textContent = `average customers per hour: ${store.avgCustPerHour}`;
//   articleElem.appendChild(pElem);

//   let ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);

//   for (let i = 0; i < hoursOfOperation.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = `${hoursOfOperation[i]} : ${store.avgCookiesPerHour[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }
//   let totalElem = document.createElement('h3');
//   totalElem.textContent = `total sales: ${store.dailySales}`;
//   articleElem.appendChild(totalElem);
// }

//--------------------------------Call Functions---------------------------//

// storeSeattle.calcAvgCookiesPerHour();
// storeTokyo.calcAvgCookiesPerHour();
// storeDubai.calcAvgCookiesPerHour();
// storeParis.calcAvgCookiesPerHour();
// storeLima.calcAvgCookiesPerHour();

// storeSeattle.calcDailySales();
// storeTokyo.calcDailySales();
// storeDubai.calcDailySales();
// storeParis.calcDailySales();
// storeLima.calcDailySales();

// console.log(storeArray)