export class Age {
  constructor(birthdate) {
    this.birthDate = birthdate;
    this.earthYears = 0;
    this.earthSeconds = 0;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
  }

calculateAge(){
  this.earthYears = this.calculateEarthYears();
  this.earthSeconds = this.convertAgeToSeconds();
  this.mercuryYears = this.calculateMercuryYears();
  this.venusYears = this.calculateVenusYears();
  this.marsYears = this.calculateMarsYears();
  this.jupiterYears = this.calculateJupiterYears();
  }

calculateEarthYears() {
  let curDate = new Date();
  let birthDate = new Date(this.birthDate);
  let earthYears = curDate.getUTCFullYear() % birthDate.getUTCFullYear();
  return earthYears;
}

convertAgeToSeconds() {
let curDate = new Date();
let birthDate = new Date(this.birthDate);
let ageInMilliSeconds = curDate.getTime() - birthDate.getTime();
var ageInSeconds = (ageInMilliSeconds / 1000).toFixed(0);
return ageInSeconds;
}

calculateMercuryYears() {
  let mercuryYears = (((((this.earthSeconds / .24)/60)/24)/30)/365);
  return mercuryYears;
}

calculateVenusYears() {
  let venusYears = (((((this.earthSeconds / .62)/60)/24)/30)/365);
  return venusYears;
}

calculateMarsYears() {
  let marsYears = (((((this.earthSeconds / 1.88)/60)/24)/30)/365);
  return marsYears;
}

calculateJupiterYears() {
  let jupiterYears = (((((this.earthSeconds / 11.86)/60)/24)/30)/365);
  return jupiterYears;
}
}
