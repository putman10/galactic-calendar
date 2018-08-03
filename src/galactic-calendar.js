export class Age {
constructor(userBirthDate, currentDate, lifeExp) {
  this.birthDate = userBirthDate;
  this.curDate = currentDate;
  this.lifeExpectancy = lifeExp;
  this.earthYears;
  this.earthSeconds;
  this.mercuryYears;
  this.venusYears;
  this.marsYears;
  this.jupiterYears;
}

calculateAge(){
  this.calculateEarthYears();
  this.convertAgeToSeconds();
  this.calculateMercuryYears();
  this.calculateVenusYears();
  this.calculateMarsYears();
  this.calculateJupiterYears();
  }

calculateEarthYears() {
  let earthYears = this.curDate.getUTCFullYear() % this.birthDate.getUTCFullYear();
  this.earthYears = earthYears;
}

convertAgeToSeconds() {
  let ageInMilliSeconds = this.curDate.getTime() - this.birthDate.getTime();
  let ageInSeconds = (ageInMilliSeconds / 1000).toFixed(0);
  this.earthSeconds = parseInt(ageInSeconds);
}

calculateMercuryYears() {
  let mercuryYears = (((((this.earthSeconds / 60)/24)/30)/365)/.24);
  this.mercuryYears = mercuryYears;
}

calculateVenusYears() {
  let venusYears = (((((this.earthSeconds/60)/24)/30)/365)/.62);
  this.venusYears =  venusYears;
}

calculateMarsYears() {
  let marsYears = (((((this.earthSeconds/60)/24)/30)/365)/1.88);
  this.marsYears =  marsYears;
}

calculateJupiterYears() {
  let jupiterYears = (((((this.earthSeconds/60)/24)/30)/365)/11.86);
  this.jupiterYears =  jupiterYears;
  debugger;
}
}
