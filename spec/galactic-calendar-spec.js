import { Age } from './../src/galactic-calendar';

describe('Age', function(){
  let reusableAge;

  beforeEach(function() {
    let birthDate = new Date("1990-01-30");
    let curDate = new Date("2018-08-03");
    let lifeExpectancy = 78.7;
    reusableAge = new Age(birthDate, curDate, lifeExpectancy);
    reusableAge.calculateEarthYears();
    reusableAge.convertAgeToSeconds();
  });

 it('should test wether correct Earth age is returned', function(){
   reusableAge.calculateEarthYears();
   expect(reusableAge.earthYears).toEqual(28);
 });

 it('should test wether correct age in seconds is returned', function(){
   reusableAge.convertAgeToSeconds();
   expect(reusableAge.earthSeconds).toEqual(899596800);
 });

 it('should test wether correct Mercury age is returned', function(){
   reusableAge.calculateMercuryYears();
   expect(reusableAge.mercuryYears).toEqual(237.71689497716898);
 });

 it('should test wether correct Venus age is returned', function(){
   reusableAge.calculateVenusYears();
   expect(reusableAge.venusYears).toEqual(92.01944321696863);
 });

 it('should test wether correct Mars age is returned', function(){
   reusableAge.calculateMarsYears();
   expect(reusableAge.marsYears).toEqual(30.34683765665987);
 });

 it('should test wether correct Jupiter age is returned', function(){
   reusableAge.calculateJupiterYears();
   expect(reusableAge.jupiterYears).toEqual(4.810459932084363);
 });

 it('should test wether the correct Earth life left of user is returned', function(){
   reusableAge.calculateEarthLifeLeft();
   expect(reusableAge.earthYearsLeft).toEqual(50.7);
 });

 it('should test wether the correct Mercury life left of user is returned', function(){
   reusableAge.calculateMercuryLifeLeft();
   expect(reusableAge.mercuryYearsLeft).toEqual(327.9166666666667);
 });

 it('should test wether the correct Venus life left of user is returned', function(){
   reusableAge.calculateVenusLifeLeft();
   expect(reusableAge.venusYearsLeft).toEqual(126.93548387096774);
 });

 it('should test wether the correct Mars life left of user is returned', function(){
   reusableAge.calculateMarsLifeLeft();
   expect(reusableAge.marsYearsLeft).toEqual(41.861702127659576);
 });

 it('should test wether the correct Jupiter life left of user is returned', function(){
   reusableAge.calculateJupiterLifeLeft();
   expect(reusableAge.jupiterYearsLeft).toEqual(6.63575042158516);
 });


});
