var app = angular.module("sampleApp7", ["firebase"]);

app.controller("SampleCtrlcat7", function($scope, $firebaseArray) {
	
	
	var ref1 = firebase.database().ref().child("carrera");
	$scope.carrera = $firebaseArray(ref1);
	var etapa;

	

	$scope.carrera.$loaded().then(function () {
  	$scope.carreradirecto=$scope.carrera[0].carrera;
  	$scope.tipodirecto=$scope.carrera[0].tipo;


  	var ref = firebase.database().ref().child($scope.carreradirecto+"/Etapas");
	$scope.etapas = $firebaseArray(ref);


	});



	$scope.LoadSessionData = function(val) {

					etapa=val;
					var ref = firebase.database().ref().child($scope.carreradirecto+"/"+etapa+"/largada/").orderByChild("largada");
				  	$scope.pilotos = $firebaseArray(ref);
				  		}

	});