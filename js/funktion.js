  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAiE-72Uddx7azUJorMS7NbKI7vT1TWkFw",
    authDomain: "jonatan-komentarer.firebaseapp.com",
    databaseURL: "https://jonatan-komentarer.firebaseio.com",
    projectId: "jonatan-komentarer",
    storageBucket: "",
    messagingSenderId: "845007827100"
  };
  firebase.initializeApp(config);

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
      // Här skriver vi kod för controllern
  $scope.kommentarer = kommentarer;

      $scope.kommentar = {
        text: "",
        skribent: ""
  };

    $scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
  };
});