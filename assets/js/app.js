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
    date = $("#input-startdate").val().trim();
    rate = $("#input-monthly-rate").val().trim();

     database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

});

database.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {
    console.log(snapshot.val())
    // $("#userdatatable")
    var employeeData = snapshot.val();
    var myDataTable = $("#userdatatable");
    var startMoment = moment(employeeData.date, "MM/DD/YYYY");
    var monthsWorked = moment().diff(startMoment, "months");
    var totalBilled = parseInt(monthsWorked)*parseInt(employeeData.rate);

    var myrow=$("<tr>");
    myrow.append("<th>" +employeeData.name + "</th>" );
    myrow.append("<th>" +employeeData.role + "</th>" );
    myrow.append("<th>" +employeeData.date + "</th>" );
    myrow.append("<th>" + monthsWorked + "</th>" );
    myrow.append("<th>" +employeeData.rate + "</th>" );
    myrow.append("<th>" + totalBilled + "</th>" );

    myDataTable.append(myrow);

})
