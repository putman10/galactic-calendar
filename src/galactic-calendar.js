export class Age {
  constructor(birthdate) {
    this.birthDate = birthdate;
    this.earthYears = 0;
    this.earthMonths = 0;
    this.earthDays = 0;
    this.earthSeconds = 0;
  }

calculateAge(){
  this.earthYears = this.calculateEarthYears();
  this.earthMonths = this.calculateEarthMonths();
  this.earthDays = this.calculateEarthDays();
  // this.earthSeconds = this.convertAgeToSeconds()
  }

calculateEarthYears() {
  let curDate = new Date();
  let birthDate = new Date(this.birthDate);
  let earthYears = curDate.getUTCFullYear() % birthDate.getUTCFullYear();
  return earthYears;
}

calculateEarthMonths() {
  debugger;
  let curDate = new Date();
  let birthDate = new Date(this.birthDate);
  let testcurrent = curDate.getMonth();
  testcurrent++;
  let testbirth = birthDate.getMonth();
  testbirth++;
  let earthMonths = testcurrent % testbirth;
  return earthMonths;
}

calculateEarthDays() {

  let curDate = new Date();
  let birthDate = new Date(this.birthDate);
  let earthDays = curDate.getDate() % birthDate.getDate();
  return earthDays;
}

convertAgeToSeconds() {
let curDate = new Date();debugger;
let birthDate = new Date(this.birthDate);
let ageInMilliSeconds = curDate.getTime() % birthDate.getTime();
var ageInSeconds = ((ageInMilliSeconds % 60000) / 1000).toFixed(0);
return ageInSeconds;
}
}
