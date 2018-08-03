export class Age {
constructor(userBirthDate, currentDate, lifeExp) {
  this.birthDate = userBirthDate;
  this.curDate = currentDate;
  this.lifeExpectancy = lifeExp;
  this.earthYears = 0;
  this.earthYearsLeft = 0;
  this.earthSeconds = 0;
  this.mercuryYears = 0;
  this.mercuryYearsLeft = 0;
  this.venusYears = 0;
  this.venusYearsLeft = 0;
  this.marsYears = 0;
  this.marsYearsLeft = 0;
  this.jupiterYears = 0;
  this.jupiterYearsLeft = 0;
}

calculateAge(){
  this.calculateEarthYears();
  this.convertAgeToSeconds();
  this.calculateMercuryYears();
  this.calculateVenusYears();
  this.calculateMarsYears();
  this.calculateJupiterYears();
  this.calculateEarthLifeLeft();
  this.calculateMercuryLifeLeft();
  this.calculateVenusLifeLeft();
  this.calculateMarsLifeLeft();
  this.calculateJupiterLifeLeft();
  }

calculateEarthYears() {
  let earthYears = this.curDate.getUTCFullYear() % this.birthDate.getUTCFullYear();
  this.earthYears = earthYears;
}

convertAgeToSeconds() {
  let ageInMilliSeconds = this.curDate.getTime() - this.birthDate.getTime();
  let ageInSeconds = ageInMilliSeconds / 1000;
  this.earthSeconds = parseInt(ageInSeconds.toFixed(0));
}

calculateMercuryYears() {
  let mercuryYears = parseFloat((((((this.earthSeconds / 60)/24)/30)/365)/.24).toFixed(6));
  this.mercuryYears = mercuryYears;
}

calculateVenusYears() {
  let venusYears = parseFloat((((((this.earthSeconds/60)/24)/30)/365)/.62).toFixed(6));
  this.venusYears =  venusYears;
}

calculateMarsYears() {
  let marsYears = parseFloat((((((this.earthSeconds/60)/24)/30)/365)/1.88).toFixed(6));
  this.marsYears =  marsYears;
}

calculateJupiterYears() {
  let jupiterYears = parseFloat((((((this.earthSeconds/60)/24)/30)/365)/11.86).toFixed(6));
  this.jupiterYears =  jupiterYears;
}

calculateEarthLifeLeft() {
  let earthLifeLeft = parseFloat((this.lifeExpectancy - this.earthYears).toFixed(2));
  this.earthYearsLeft =  earthLifeLeft;
}

calculateMercuryLifeLeft() {
  let lifeExpectancyOnMercury = this.lifeExpectancy / .24;
  let mercuryLifeLeft = parseFloat((lifeExpectancyOnMercury - this.mercuryYears).toFixed(6));
  this.mercuryYearsLeft =  mercuryLifeLeft;
}

calculateVenusLifeLeft() {
  let lifeExpectancyOnVenus = this.lifeExpectancy / .62;
  let venusLifeLeft = parseFloat((lifeExpectancyOnVenus - this.venusYears).toFixed(6));
  this.venusYearsLeft =  venusLifeLeft;
}

calculateMarsLifeLeft() {
  let lifeExpectancyOnMars = this.lifeExpectancy / 1.88;
  let marsLifeLeft = parseFloat((lifeExpectancyOnMars - this.marsYears).toFixed(6));
  this.marsYearsLeft =  marsLifeLeft;
}

calculateJupiterLifeLeft() {
  let lifeExpectancyOnJupiter = this.lifeExpectancy / 11.86;
  let jupiterLifeLeft = parseFloat((lifeExpectancyOnJupiter - this.jupiterYears).toFixed(6));
  this.jupiterYearsLeft =  jupiterLifeLeft;
}
}
