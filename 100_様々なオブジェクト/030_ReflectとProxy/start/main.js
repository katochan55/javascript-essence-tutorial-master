export class Person {
  constructor(name) {
    this._name = name;
  }

  hello() {
    console.log(`hello ${this._name}`);
  }
}
