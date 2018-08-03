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
}

calculateEarthLifeLeft() {
  let earthLifeLeft = this.lifeExpectancy - this.earthYears;
  this.earthYearsLeft =  earthLifeLeft;
}

calculateMercuryLifeLeft() {
  let lifeExpectancyOnMercury = this.lifeExpectancy / .24;
  let mercuryLifeLeft = lifeExpectancyOnMercury - this.mercuryYears;
  this.mercuryYearsLeft =  mercuryLifeLeft;
}

calculateVenusLifeLeft() {
  let lifeExpectancyOnVenus = this.lifeExpectancy / .62;
  let venusLifeLeft = lifeExpectancyOnVenus - this.venusYears;
  this.venusYearsLeft =  venusLifeLeft;
}

calculateMarsLifeLeft() {
  let lifeExpectancyOnMars = this.lifeExpectancy / 1.88;
  let marsLifeLeft = lifeExpectancyOnMars - this.marsYears;
  this.marsYearsLeft =  marsLifeLeft;
}

calculateJupiterLifeLeft() {
  let lifeExpectancyOnJupiter = this.lifeExpectancy / 11.86;
  let jupiterLifeLeft = lifeExpectancyOnJupiter - this.jupiterYears;
  this.jupiterYearsLeft =  jupiterLifeLeft;
}
}
