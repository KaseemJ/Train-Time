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

    var name = $("#Train-name").val().trim();
    var destination = $("#Train-destination").val().trim();
    var firstTrain = $("#First-train").val().trim();
    var frequency = $("#Frequency").val().trim();


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
    $("table tbody").append("<tr><td>"+snapshot.val().name+"</td><td>"+snapshot.val().destination+"</td><td>"+snapshot.val().firstTrain+"</td><td>"+snapshot.val().frequency+"</td><tr>");
});