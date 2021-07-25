'use strict'
console.log('I am here');

function randomCust(a, b) {
  let custPerHour = Math.floor(Math.random() * (b - a + 1) + a); 
  console.log(custPerHour)
  // return custPerHour;
}

function hourlyCookies(a, b) {
  let cookiesPerHour = Math.floor(a * b); 
  console.log(cookiesPerHour)
}
 
const storeSeattle = {
  storeLocation: 'Seattle',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCustPerHour: 0,
  avgCookieSale: 6.3,
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(23, 65)
  },
  avgCookiesPerHour: this.avgCustPerHour * this.avgCookieSale,
}

const storeTokyo = {
  storeLocation: 'Tokyo',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCustPerHour: 0,
  avgCookieSale: 1.2,
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(3, 24)
  },
  avgCookiesPerHour: this.avgCustPerHour * this.avgCookieSale,
}

const storeDubai = {
  storeLocation: 'Dubai',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCustPerHour: 0,
  avgCookieSale: 3.7,
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(11, 38)
  },
  avgCookiesPerHour: this.avgCustPerHour * this.avgCookieSale,
}

const storeParis = {
  storeLocation: 'Paris',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCustPerHour: 0,
  avgCookieSale: 2.3,
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(20, 38)
  },
  avgCookiesPerHour: this.avgCustPerHour * this.avgCookieSale,
}

const storeLima = {
  storeLocation: 'Lima',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCustPerHour: 0,
  avgCookieSale: 4.6,
  calcAvgCust: function() {
    this.avgCustPerHour = randomCust(2, 16)
  },
  avgCookiesPerHour: 0,
  calcAvgCookiesPerHour: function () {
    this.avgCookiesPerHour = hourlyCookies(this.avgCustPerHour * this.avgCookieSale)
  },
}




storeSeattle.calcAvgCust();
storeTokyo.calcAvgCust();
storeDubai.calcAvgCust();
storeParis.calcAvgCust();
storeLima.calcAvgCust();
storeLima.calcAvgCookiesPerHour();



