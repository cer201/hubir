/**
 * Reservation form
 */

"use strict";


var config = {
    apiKey: "AIzaSyDwmIb1yuSg3q-YtsmvxXh0IPkfkvZasig",
    authDomain: "datacollect-4f475.firebaseapp.com",
    databaseURL: "https://datacollect-4f475.firebaseio.com",
    projectId: "datacollect-4f475",
    storageBucket: "datacollect-4f475.appspot.com",
    messagingSenderId: "370113740376",
    appId: "1:370113740376:web:ac5ed59dba53b6ca"
  };


  // Initialize Firebase
  firebase.initializeApp(config);
  var database = firebase.database()
  var ref = database.ref("user");
 var newUserRef = ref.push();


//var reservation = (function() {

	// Variables
	var form =			$('#reservation__form');
	var formName = 		$('#reservation__form__name');
	var formPhone = 	$('#reservation__form__phone');
	var formEmail = 	$('#reservation__form__email');
//	var formPeople = 	$('#reservation__form__people');
	var formDate = 		$('#reservation__form__date');
	var formTime = 		$('#reservation__form__time');
	var formSubmit = 	form.find('[type="submit"]');
//	var formActionUrl = 'assets/plugins/reservation/reservation.php';

	// Methods
//	function getCurrentDate() {
//		var today = new Date();
//		var dd = today.getDate();
//		var mm = today.getMonth() + 1;
//		var yyyy = today.getFullYear();
//
//		if ( dd < 10 ) {
//			dd = '0' + dd;
//		}
//		if ( mm < 10 ) {
//			mm = '0' + mm;
//		}
//
//		return yyyy + '-' + mm + '-' + dd;
//	}
//	function setCurrentDate() {
//		var today = getCurrentDate();
//		formDate.val(today);
//		
//	}
	
	$(".submit").on("click",function(event){
		
		
		event.preventDefault();
		
		
		
		
formName = $("#reservation__form__name").val().trim();
formPhone = $("#reservation__form__phone").val().trim();
formEmail = $("#reservation__form__email").val().trim();
//dropLocation = $("#reservation__form__people").val();
formDate = $("#reservation__form__date").val().trim();
formTime = $("#reservation__form__time").val().trim();
		
		
		newUserRef.set({
		name: formName,
		phoneNumber: formPhone,
		email: formEmail,
		reserveDate : formDate,
		reserveTime : formTime
		});
	
$("#reservation__form__name").val("");
$("#reservation__form__phone").val("");
$("#reservation__form__email").val("");
//dropLocation = $("#reservation__form__people").val();
$("#reservation__form__date").val();
$("#reservation__form__time").val();
		
	})
	
		
//	function submitForm($this) {
//		
//
//		$.ajax({
//			url: formActionUrl,
//			type: 'POST',
//			data: $this.serialize(),
//			dataType: 'json',
//			beforeSend: function (XMLHttpRequest) {
//
//				// Disable submit button
//				formSubmit.prop('disabled', true);
//
//				// Clear error messages
//				form.find('.is-invalid').removeClass('is-invalid');
//				form.find('.invalid-feedback').html('');
//
//			},
//			success: function( json, textStatus ) {
//
//				// Enable submit button
//				formSubmit.prop('disabled', false);
//
//				function showError(elem, message) {
//					elem.addClass('is-invalid');
//					elem.next('.invalid-feedback').html(message);
//				}
//
//				if( json.error ) {
//
//					// Proceed error messages
//					if ( json.error.name ) {
//						showError(formName, json.error.name);
//					}
//					if ( json.error.phone ) {
//						showError(formPhone, json.error.phone);
//					}
//					if ( json.error.email ) {
//						showError(formEmail, json.error.email);
//					}
//					if ( json.error.people ) {
//						showError(formPeople, json.error.people);
//					}
//					if ( json.error.date ) {
//						showError(formDate, json.error.date);
//					}
//					if ( json.error.time ) {
//						showError(formTime, json.error.time);
//					}
//				}
//
//				// Proceed success message
//				if( json.success ) {
//
//					// Show alert message
//					$(document).trigger('touche.alert.show', ['success', json.success]);
//
//					// Reset form fields
//					form[0].reset();
//				}
//			}
//		});
	

	//}

	// Set current date
	//setCurrentDate();

	// Process form
//	form.on('submit', function() {
//		submitForm( $(this) );
//		return false;
	//});

//})();