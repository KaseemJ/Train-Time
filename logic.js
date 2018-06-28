var config = {
    apiKey: "AIzaSyAXji5IxiPJLSLAfxnmvrahRQk62cQe1YY",
    authDomain: "cbc-june2018.firebaseapp.com",
    databaseURL: "https://cbc-june2018.firebaseio.com",
    projectId: "cbc-june2018",
    storageBucket: "cbc-june2018.appspot.com",
    messagingSenderId: "81588973328"
};
firebase.initializeApp(config);

var database = firebase.database();

$(".submitButton").on("click", function (e) {
    e.preventDefault();
    alert("I've been clicked");

    var name = $("#Train-name").val().trim()
    var destination = $("#Train-destination").val().trim()
    var firstTrain = $("#First-train").val().trim()
    var frequency = $("#Frequency").val().trim()


    // Code for handling the push
    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

database.ref().on("child_added", function(snapshot){
    console.log(snapshot.val());
    $("table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().firstTrain + "</td><td>" + snapshot.val().frequency + "</td><tr>");

    var tFrequency = 30;

    // Time is 3:30 AM
    var firstTime = "01:00";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


});

