var app = angular.module("sampleApp6", ["firebase"]);

app.controller("SampleCtrlcat6", function($scope, $firebaseArray) {
	
	
	var ref1 = firebase.database().ref().child("carrera");
	$scope.carrera = $firebaseArray(ref1);

	var ref = firebase.database().ref().child("categoria");
	$scope.categoria = $firebaseArray(ref);

	$scope.carrera.$loaded().then(function () {
  	//console.log($scope.carrera[0].carrera);
  	//console.log($scope.carrera[0].tipo);
  	$scope.carreradirecto=$scope.carrera[0].carrera;
  	$scope.tipodirecto=$scope.carrera[0].tipo;


	});



	$scope.LoadSessionData = function(val) {


					var ref = firebase.database().ref().child($scope.carreradirecto+"/Inscritos/"+val).orderByChild("largada");
				  	$scope.pilotos = $firebaseArray(ref);
	}

	});