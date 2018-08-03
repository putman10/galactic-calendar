import { Age } from './../src/galactic-calendar';

describe('Age', function(){
  var reusableAge;

  beforeEach(function() {
    var birthdate = "1990-01-30";
    reusableAge = new Age(birthdate);
  });

 it('should test wether correct Earth age is returned', function(){
   reusableAge.calculateEarthYears();
   expect(reusableAge.earthYears).toEqual(28);
 });

 it('should test wether correct age in seconds is returned', function(){
   reusableAge.convertAgeToSeconds();
   expect(reusableAge.earthSeconds).toEqual(899669174);
 });


 it('should test wether correct Mercury age is returned', function(){
   reusableAge.convertAgeToSeconds();
   reusableAge.calculateMercuryYears();
   expect(reusableAge.mercuryYears).toEqual(237.7360196812109);
 });

 it('should test wether correct Venus age is returned', function(){
   reusableAge.convertAgeToSeconds();
   reusableAge.calculateVenusYears();
   expect(reusableAge.venusYears).toEqual(92.02684632821068);
 });

 it('should test wether correct Mars age is returned', function(){
   reusableAge.convertAgeToSeconds();
   reusableAge.calculateMarsYears();
   expect(reusableAge.marsYears).toEqual(30.349279108239685);
 });

 it('should test wether correct Jupiter age is returned', function(){
   reusableAge.convertAgeToSeconds();
   reusableAge.calculateJupiterYears();
   expect(reusableAge.jupiterYears).toEqual(4.810846941272396);
 });


});
