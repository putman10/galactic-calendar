import {Age} from './galactic-calendar';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#age-calculator").submit(function(event){
    event.preventDefault();
    // var birthdate = $("#age").val();
    let lifeExpectancy = 78.7;
    let birthDate = new Date("1990-01-30");
    let currentDate = new Date();
    let reusableAge = new Age(birthDate, currentDate, lifeExpectancy);
    $(".results").text(reusableAge.calculateAge());
  });
});
