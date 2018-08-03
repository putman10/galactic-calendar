import {Age} from './galactic-calendar';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#age-calculator").submit(function(event){
    event.preventDefault();
    let birthDateInput = $("#age").val();
    let lifeExpectancy = $("#life-expectancy").val();
    let birthDate = new Date(birthDateInput);
    const currentDate = new Date();
    const reusableAge = new Age(birthDate, currentDate, lifeExpectancy);
    reusableAge.calculateAge();
    $(".birth-date").text(reusableAge.birthDate);
    $(".current-date").text(reusableAge.curDate);
    $(".life-expectancy").text(reusableAge.lifeExpectancy);
    $(".earth-years").text(reusableAge.earthYears);
    $(".earth-years-left").text(reusableAge.earthYearsLeft);
    $(".earth-seconds").text(reusableAge.earthSeconds);
    $(".mercury-years").text(reusableAge.mercuryYears);
    $(".mercury-years-left").text(reusableAge.mercuryYearsLeft);
    $(".venus-years").text(reusableAge.venusYears);
    $(".venus-years-left").text(reusableAge.venusYearsLeft);
    $(".mars-years").text(reusableAge.marsYears);
    $(".mars-years-left").text(reusableAge.marsYearsLeft);
    $(".jupiter-years").text(reusableAge.jupiterYears);
    $(".jupiter-years-left").text(reusableAge.jupiterYearsLeft);
    $(".results").show();
  });
});
