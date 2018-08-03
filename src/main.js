import {Age} from './galactic-calendar';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#age-calculator").submit(function(event){
    event.preventDefault();
    // var birthdate = $("#age").val();
    var hardCodedInput = "1990-01-30";
    var birthDate = new Date(hardCodedInput);
    var currentDate = new Date();
    var reusableAge = new Age(birthDate, currentDate);
    $(".results").text(reusableAge.calculateAge());
  });
});
