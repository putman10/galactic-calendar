export class Age {
  constructor(birthdate) {
    this.birthDate = birthdate;
    this.earthAge = 0;
    this.seconds = 0;
  }
  calculateAge(){
  this.earthAge = this.yearDifference()
  console.log(this.age);
  }

  convertAgeToSeconds() {
  let dateParts = this.birthdate.split("/");
  let birthDateObject = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
  this.seconds = birthDateObject.getSeconds();
  return this.seconds;
  }

  yearDifference() {
  debugger;
  let curDate = new Date();
  let birthDate = new Date(this.birthDate);
  let earthAge = curDate.getUTCFullYear() % birthDate.getUTCFullYear();
  return earthAge;
}
}
