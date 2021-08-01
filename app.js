'use strict'
console.log('I am here');
 
let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// function hourlyCookies(a, b) {
//   // console.log(a, b)
//   let cookiesPerHour = Math.floor(a * b); 
// }


//--------------------------------Constructor----------------------------//
// make a constructor to replace all instances of stores 

function Store(storeLocation, minHourlyCust, maxHourlyCust, avgCookieSale) {
  this.storeLocation = storeLocation;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookieSale = avgCookieSale;
  this.avgCustPerHour = [];
  this.avgCookiesPerHour = [];
  // this.totalCookieSales = [];
}

//---------------------------Prototype Methods------------------------//

//--------------------------Store Object Literals--------------------//
const storeSeattle = {
  storeLocation: 'Seattle',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookieSale: 6.3,
  avgCustPerHour: [],
  avgCookiesPerHour: [],
  dailySales: 0,
  
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(23, 65)
  },
  
  calcAvgCookiesPerHour: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]))
    }
  },

  calcDailySales: function() {
    this.dailySales = totalCookieSales(this.avgCookiesPerHour)   
  }
}




const storeTokyo = {
  storeLocation: 'Tokyo',
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookieSale: 1.2,
  avgCustPerHour: [],
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(3, 24)
  },
  avgCookiesPerHour: [],
  calcAvgCookiesPerHour: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]))
    }
    // this.avgCookiesPerHour = hourlyCookies(this.avgCustPerHour, )
    console.log(this.avgCookiesPerHour)
  },
  dailySales: 0,
  calcDailySales: function() {
    this.dailySales = totalCookieSales(this.avgCookiesPerHour)    
  }
}

const storeDubai = {
  storeLocation: 'Dubai',
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookieSale: 3.7,
  avgCustPerHour: [],
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(11, 38)
  },
  avgCookiesPerHour: [],
  calcAvgCookiesPerHour: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]))
    }
    // this.avgCookiesPerHour = hourlyCookies(this.avgCustPerHour, )
    console.log(this.avgCookiesPerHour)
  },
  dailySales: 0,
  calcDailySales: function() {
    this.dailySales = totalCookieSales(this.avgCookiesPerHour)    
  }
}

const storeParis = {
  storeLocation: 'Paris',
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookieSale: 2.3,
  avgCustPerHour: [],
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(20, 38)
  },
  avgCookiesPerHour: [],
  calcAvgCookiesPerHour: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]))
    }
    // this.avgCookiesPerHour = hourlyCookies(this.avgCustPerHour, )
    console.log(this.avgCookiesPerHour)
  },
  dailySales: 0,
  calcDailySales: function() {
    this.dailySales = totalCookieSales(this.avgCookiesPerHour)    
  }
}

const storeLima = {
  storeLocation: 'Lima',
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookieSale: 4.6,
  avgCustPerHour: [],
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(2, 16)
  },
  avgCookiesPerHour: [],
  calcAvgCookiesPerHour: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.avgCookiesPerHour.push(Math.floor(this.avgCookieSale * this.avgCustPerHour[i]));
    }
    // this.avgCookiesPerHour = hourlyCookies(this.avgCustPerHour, )
    console.log(this.avgCookiesPerHour);
  },
  dailySales: 0,
  calcDailySales: function() {
    this.dailySales = totalCookieSales(this.avgCookiesPerHour)    
  }
}

//-------------------------------Global Functions---------------------//

function randomCust(a, b) {
  let c = [];
  console.log(a, b);
  for (let i = 0; i < hoursOfOperation.length; i++) {
    // console.log(a, b)
  let custPerHour = Math.floor(Math.random() * (b - a + 1) + a);
  c.push(custPerHour);
  }
  return c;
}

// function hourlyCookies(a, b) {
//   // console.log(a, b)
//   let cookiesPerHour = Math.floor(a * b);

// }

function totalCookieSales() {
  let daysTotalSales = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    daysTotalSales = daysTotalSales + this.avgCookiesPerHour([i]);
  }
}

//--------------------------------Call Functions---------------------------//

storeSeattle.calcAvgCust();
storeTokyo.calcAvgCust();
storeDubai.calcAvgCust();
storeParis.calcAvgCust();
storeLima.calcAvgCust();

storeSeattle.calcAvgCookiesPerHour();
storeTokyo.calcAvgCookiesPerHour();
storeDubai.calcAvgCookiesPerHour();
storeParis.calcAvgCookiesPerHour();
storeLima.calcAvgCookiesPerHour();

storeSeattle.calcDailySales();
storeTokyo.calcDailySales();
storeDubai.calcDailySales();
storeParis.calcDailySales();
storeLima.calcDailySales();

const storeArray = [storeSeattle, storeTokyo, storeDubai, storeParis, storeLima];

const secStoreElem = document.getElementById('store');

function renderStore(store) {
  let articleElem = document.createElement('article')
  secStoreElem.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = `${store.storeLocation}`;
  articleElem.appendChild(h2Elem);

  let pElem = document.createElement('p');
  pElem.textContent = `average customers per hour: ${store.avgCustPerHour}`;
  articleElem.appendChild(pElem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${hoursOfOperation[i]} : ${store.avgCookiesPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
}

for (let i = 0; i < storeArray.length; i++) {
  renderStore(storeArray[i])
}
