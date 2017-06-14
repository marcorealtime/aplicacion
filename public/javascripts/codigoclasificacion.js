var app = angular.module("sampleApp2", ["firebase"]);

app.controller("SampleCtrlcat2", function($scope, $firebaseArray) {
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
		
		$scope.LoadSessionData = function(val) {
			
			
			//console log
			        
			        console.log(val);
			        app.value('Categoria',val);
			        
			        var ref = firebase.database().ref().child($scope.carreradirecto+"/Clasificacion/"+val).orderByChild("tiempo");
				  		$scope.pilotos = $firebaseArray(ref);
				
				  	ref.on('value', function(snapshot) {
				  		//console.log("numerod e hios"+snapshot.numChildren());
				  		 $scope.units = [];
				  		 var i=0;
  							 var myElement = {
  								dato: 0,
 							   	value: 0
							};
  						snapshot.forEach(function(data) {
							console.log(i);
							if(i==0){

								 var myElement = {
								auto: nombretop( data.child("nombre").val(),0),
  								nombre: nombretop( data.child("nombre").val(),1),
  								nave: nombretop( data.child("nombre").val(),2),
 							   	tiempo: data.child("tiempo").val(),
 							   	tiempoa: "-----",
 							   	repe: data.child("repechaje").val(),
 							   	manga: data.child("manga").val(),
 							   	pena: data.child("pena").val(),
 							   	km: velocidad(data.child("tiempo").val(),data.child("tam").val()),
 							   	tiempop:"-----"
							};
  							//myElement.id =i;
							//myElement.value=data.child("nombre").val();
							$scope.units[i] = myElement;
  							i++;

							}
							else{

								 var myElement = {
  								auto: nombretop( data.child("nombre").val(),0),
  								nombre: nombretop( data.child("nombre").val(),1),
  								nave: nombretop( data.child("nombre").val(),2),
 							   	tiempo: data.child("tiempo").val(),
 							   	tiempoa: restTimes(data.child("tiempo").val(), $scope.units[i-1].tiempo),
 							   	repe: data.child("repechaje").val(),
 							   	manga: data.child("manga").val(),
 							   	pena: data.child("pena").val(),
 							   	km: velocidad(data.child("tiempo").val(),data.child("tam").val()),
 							   	tiempop:  restTimes(data.child("tiempo").val(), $scope.units[0].tiempo)
							};
  							//myElement.id =i;
							//myElement.value=data.child("nombre").val();
							$scope.units[i] = myElement;
  							i++;

							}
							
							//$scope.units[i]=
  							//$scope.units.push({ dato: 'dato', value: data.child("nombre").val() });
  							//$scope.units.push({'datos':data.child("nombre").val()});
  							//arr[i][0]=data.child("nombre").val();
  							//arr[i][1]=data.child("tiempo").val();
  							//arr[i][2]=data.child("tam").val();
        				//console.log(arr[i][0]+"//"+arr[i][1]+"//"+arr[i][2]);
  
    					});
    					
					});


					function restTimes(start, end) {
		  		  times = [];
		  		  times1 = start.split(':');
		  		  times2 = end.split(':');

		  		  for (var i = 0; i < 3; i++) {
		  		    times1[i] = (isNaN(parseFloat(times1[i]))) ? 0 : parseFloat(times1[i])
		  		    times2[i] = (isNaN(parseFloat(times2[i]))) ? 0 : parseFloat(times2[i])
		  		    times[i] = times1[i] - times2[i];
		  		  }

		  		  var seconds = Math.round(times[2]* 100) / 100;
		  		  var minutes = times[1];
		  		  var hours = times[0];

		  		  if (seconds % 60 === 0) {
		  		    hours += seconds / 60;
		  		  }

		  		  if (minutes % 60 === 0) {
		  		    res = minutes / 60;
		  		    hours += res;
		  		    minutes = minutes - (60 * res);
		  		  }
		  		 var horas;
		  		var minutos;
		  		  if(hours.toString().length==1){
		  			  horas="0"+hours.toString();
		  		  }
		  		  else{
		  			 var horas=hours.toString();
		  		  }
		  		if(minutes.toString().length==1){
		  			 minutos="0"+minutes.toString();
		  		  }
		  		else{
		  			minutos=minutes.toString();
		  		}
		  		  

		  		  console.log(hours + ':' + minutes + ':' + seconds);
		  		  return horas + ':' + minutos + ':' + seconds;
		  		}

		  		function velocidad(tiempo,dis){
		  				times = [];
		  		  		times1 = tiempo.split(':');

		  		  		for (var i = 0; i < 3; i++) {
		  		    	times1[i] = (isNaN(parseFloat(times1[i]))) ? 0 : parseFloat(times1[i])
		  		  		}
		  		  		console.log(times1[0]+':'+times1[1]+'.'+times1[2]);

		  		  		var h=times1[0]+(times1[1]/60)+(times1[2]/3600);

		  		  		var v=parseFloat(dis)/h;

		  		  		return Math.round(v * 1000) / 1000 ;



		  		}

		  		function nombretop(nombre,pos){
		  			names = nombre.split('/');
		  			var n;
		  			if(pos==0){n=names[0]}
		  			if(pos==1){n=names[1]}
		  			if(pos==2){n=names[2]}

		  			return n;
		  		}


				  	

				  
			  	
			        
			    }
		
	
	
	
	
	
	
	});



