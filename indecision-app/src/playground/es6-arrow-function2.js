const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(5,2,4));

const user = {
    name: 'Andrew',
    cities: ['A', 'B', 'C'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

const multiplier = {
    
}
console.log(user.printPlacesLived());