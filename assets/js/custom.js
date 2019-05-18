/**
 * Custom JS
 * Use this file to add your custom scripts
 */

// JavaScript Document

var name;
var phoneNumber;
var email;
//var dropLocation;
var reserveDate;
var reserveTime;


var firebaseConfig = {
    apiKey: "AIzaSyDwmIb1yuSg3q-YtsmvxXh0IPkfkvZasig",
    authDomain: "datacollect-4f475.firebaseapp.com",
    databaseURL: "https://datacollect-4f475.firebaseio.com",
    projectId: "datacollect-4f475",
    storageBucket: "datacollect-4f475.appspot.com",
    messagingSenderId: "370113740376",
    appId: "1:370113740376:web:ac5ed59dba53b6ca"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  
  function getCurrentDate() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();

		if ( dd < 10 ) {
			dd = '0' + dd;
		}
		if ( mm < 10 ) {
			mm = '0' + mm;
		}

		return yyyy + '-' + mm + '-' + dd;
	}
	function setCurrentDate() {
		var today = getCurrentDate();
		reserveDate.val(today);
	}

setCurrentDate();
$(".submit").on("click",function(event){
	
event.preventDefault();
	
name = $("#reservation__form__name").val().trim();
phoneNumber = $("#reservation__form__phone").val().trim();
email = $("#reservation__form__email").val().trim();
//dropLocation = $("#reservation__form__people").val();
reserveDate = $("#reservation__form__date").val().trim();
reserveTime = $("#reservation__form__time").val().trim();

	database.ref().push({
		name: name,
		phoneNumber: phoneNumber,
		email: email,
		reserveDate : reserveDate,
		reserveTime : reserveTime
		
		
	})

});
