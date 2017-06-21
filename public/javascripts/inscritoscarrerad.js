var app = angular.module("sampleAppin", ["firebase"]);

app.controller("SampleCtrlcatin", function($scope, $firebaseArray) {
	
	

	var ref = firebase.database().ref().child("categoria");
	$scope.categoria = $firebaseArray(ref);

	



	$scope.LoadSessionData = function(val) {


					var ref = firebase.database().ref().child(workflowData+"/Inscritos/"+val).orderByChild("largada");
				  	$scope.pilotos = $firebaseArray(ref);
	}

	});