class Person {
  constructor(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    console.log('Init Person!!!');
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Person;