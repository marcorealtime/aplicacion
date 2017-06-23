var app = angular.module("sampleAppin", ["firebase"]);

app.controller("SampleCtrlcatin", function($scope, $firebaseArray) {
	
	

	var ref = firebase.database().ref().child("categoria");
	$scope.categoria = $firebaseArray(ref);

	



	$scope.LoadSessionData = function(val) {


					var ref = firebase.database().ref().child(workflowData+"/Inscritos/"+val);
				  	$scope.pilotos = $firebaseArray(ref);

				  	ref.orderByChild("largada").on('value', function(snapshot) {

				  		 $scope.units = [];
				  		 var i=0;
				  	
  						snapshot.forEach(function(data) {


  							var myElement2 = {
								auto: nombretop( data.child("nombre").val(),0),
  								nombre: nombretop( data.child("nombre").val(),1),
  								nave: nombretop( data.child("nombre").val(),2),
  								adm:data.child("largada").val(),
  								revi:data.child("inspec").val()
 							   	
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