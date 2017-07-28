var name
var role
var date
var rate


var config = {
    apiKey: "AIzaSyAzVocKqMDQsfMTbKQt8Jl_vMmtVyV84Yk",
    authDomain: "timesheetproject-e4419.firebaseapp.com",
    databaseURL: "https://timesheetproject-e4419.firebaseio.com",
    projectId: "timesheetproject-e4419",
    storageBucket: "",
    messagingSenderId: "761832508785"
  };

firebase.initializeApp(config);

var database = firebase.database();

$(document).on("click", "#submit",function(){
	 event.preventDefault();
   // Grabbed values from text boxes
      name = $("#input-name").val().trim();
      role = $("#input-role").val().trim();
      date = $("#input-date").val().trim();
      rate = $("#input-rate").val().trim();

     database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
      });

});