var app = angular.module("sampleAppindex", ["firebase"]);

app.controller("SampleCtrlcatindex", function($scope, $firebaseArray) {
	var ref = firebase.database().ref().child("categoria");
	$scope.categoria = $firebaseArray(ref);
	
	var ref1 = firebase.database().ref().child("carrera");
	$scope.carrera = $firebaseArray(ref1);



	$scope.carrera.$loaded().then(function () {
  console.log($scope.carrera[0].carrera);
  console.log($scope.carrera[0].tipo);
  $scope.carreradirecto=$scope.carrera[0].carrera;
  $scope.tipodirecto=$scope.carrera[0].tipo;

});
		
		
		
	
	
	
	
	
	
	});

