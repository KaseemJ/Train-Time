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

  $("#click-button").on("click", function() {
    alert("I've been clicked");

name = $("#Train-name").val().trim().
  destination = $("#Train-destination").val().trim().
    firstTrain = $("#First-train").val().trim().
        frequency = $("#Frequency").val().trim().


// Code for handling the push
database.ref().push({
    name: Train-name,
    destination: Train-destination,
    firstTrain: First-train,
    frequency: Frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
});
});
