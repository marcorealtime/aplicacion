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
					var ref = firebase.database().ref().child($scope.carreradirecto+"/"+etapa+"/largada/");
				  	$scope.pilotos = $firebaseArray(ref);

				  	ref.orderByChild("largada").on('value', function(snapshot) {

				  		 $scope.units = [];
				  		 var i=0;
				  	
  						snapshot.forEach(function(data) {


  							var myElement2 = {
								auto: nombretop( data.child("nombre").val(),0),
  								nombre: nombretop( data.child("nombre").val(),1),
  								nave: nombretop( data.child("nombre").val(),2),
  								largada:data.child("largada").val(),
  								clase:data.child("clase").val(),
  								obs:data.child("obs").val()
 							   	
							};
  							//myElement.id =i;
							//myElement.value=data.child("nombre").val();
							$scope.units[i] = myElement2;
  							i++;


  						});

  					});

  					function nombretop(nombre,pos){
		  			names = nombre.split('/');
		  			var n;
		  			for (var i = 0; i < 3; i++) {
		  		    	n = n + '<br> names[0]'
		  		  		}
		  			if(pos==0){n=names[0]}
		  			if(pos==1){n=names[1]}
		  			if(pos==2){n=names[2]}

		  			return n;
		  			}
				  		




	}

	});