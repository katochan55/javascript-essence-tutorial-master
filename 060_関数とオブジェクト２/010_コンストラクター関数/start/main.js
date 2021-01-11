class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('Person: hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
console.log(bob);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('Person: hello ' + this.name);
// }
