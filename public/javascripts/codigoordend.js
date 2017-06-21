var app = angular.module("sampleApp9", ["firebase"]);

app.controller("SampleCtrlcat9", function($scope, $firebaseArray) {
	
	


  	var ref = firebase.database().ref().child(workflowData+"/Etapas");
	$scope.etapas = $firebaseArray(ref);


	



	$scope.LoadSessionData = function(val) {

					etapa=val;
					var ref = firebase.database().ref().child(workflowData+"/"+etapa+"/largada/").orderByChild("largada");
				  	$scope.pilotos = $firebaseArray(ref);
				  		}

	});