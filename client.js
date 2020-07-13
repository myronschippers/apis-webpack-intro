class Person {
  constructor(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const instructor = new Person('Myron', 'Schippers', 37);
console.log(instructor);