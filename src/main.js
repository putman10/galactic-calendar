import {Age} from './galactic-calendar';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#age-calculator").submit(function(event){
    event.preventDefault();
    // var birthdate = $("#age").val();
    var birthdate = "1990-01-30";
    var reusableAge = new Age(birthdate);
    $(".results").text(reusableAge.calculateAge());
  });
});
