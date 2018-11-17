// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
}
console.log(add(55, 1));

const addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
}
console.log(addArrow(55, 1));


// this keyword - no longer bound

const user1 = {
  name: 'Mahavir',
  cities: ['Pune', 'Nasik', 'Nagar'],
  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach(function (city) {
      // console.log(this.name + ' has lived in ' + city);
    });
  }
};
user1.printPlacesLived();

// this keyword - no longer bound - Workaround to access this
const user2 = {
  name: 'Mahavir',
  cities: ['Pune', 'Nasik', 'Nagar'],
  printPlacesLived: function () {
    const that = this;
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city);
    });
  }
};
user2.printPlacesLived()

// this keyword - no longer bound - Workaround to access this
const user3 = {
  name: 'Mahavir',
  cities: ['Pune', 'Nasik', 'Nagar'],
  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach((city) => {
      console.log(this.name + ' has stayed in ' + city);
    });
  }
};
user3.printPlacesLived()


const user4 = {
  name: 'Rahul',
  cities: ['Pune', 'Nasik', 'Nagar'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + ' has stayed in ' + city);
    });
  }
};
user4.printPlacesLived()

const user5 = {
  name: 'Yogesh',
  cities: ['Pune', 'Nasik', 'Nagar'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
    return cityMessages;
  }
};
console.log(user5.printPlacesLived());

const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num*this.multiplyBy);
  }
};
console.log(multiplier.multiply());
