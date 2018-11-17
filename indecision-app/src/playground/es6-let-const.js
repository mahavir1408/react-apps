var nameVar = 'NameVar1';
var nameVar = 'NameVar2';
console.log('nameVar', nameVar);

let nameLet = 'nameLet1';
nameLet = 'nameLet2';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


// Block scoping

var fullName = 'Full Name';
if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
 }
 
 console.log(firstName);