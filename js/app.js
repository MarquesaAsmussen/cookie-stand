'use strict'
console.log('I am here');

var storeSeattle = {
  storeLocation: 'Seattle',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookieSale: 6.3,
  // Uses a method of that object to generate a random number of customers per hour
  // function getRandomArbitrary(min, max) {
  //return Math.random() * (max - min) + min;
  calcAvgCustPerHour: function() {
    return this.calcAvgCustPerHour = randomCustPerHour(23, 65);
    },
    randomCustPerHour: function(a, b) {
     let custPerHour = Math.floor(Math.random() * (b - a) + a); 
    console.log(this.calcAvgCustPerHour)
  }

}

