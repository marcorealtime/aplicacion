var app = angular.module("sampleAppCir", ["firebase"]);

app.controller("SampleCtrlCir", function($scope, $firebaseArray) {
	
	
	var ref1 = firebase.database().ref().child("carrera");
	$scope.carrera = $firebaseArray(ref1);

	var clase;
	var pe;

	$scope.carrera.$loaded().then(function () {
  	//console.log($scope.carrera[0].carrera);
  	//console.log($scope.carrera[0].tipo);
  	$scope.carreradirecto=$scope.carrera[0].carrera;
  	$scope.tipodirecto=$scope.carrera[0].tipo;


	var ref = firebase.database().ref().child("categoria");
	$scope.etapas = $firebaseArray(ref);

	});

	

	//console.log($scope.etapas);
		
	$scope.LoadSessionData = function(val) {
			
			
					
			        console.log(val);
			       	clase=val;
			        $scope.clasem=val;


					pe=val;
					var ref = firebase.database().ref().child($scope.carreradirecto+"/Clasificacion/"+clase);
				  	$scope.pilotos = $firebaseArray(ref);
				  	console.log($scope.pilotos);
				  	ref.orderByChild("tiempo").on('value', function(snapshot) {
				  		//console.log("numerod e hios"+snapshot.numChildren());


				  		 
				  		 $scope.unitscorriendo = [];
				  		
				  		 
				  		 var h=0;
				  		
  						snapshot.forEach(function(data) {
							//console.log(data.child("nombre").val());

							//var dato=data.child("estado").val();

							


								if(h==0){

								 var myElement2 = {
								auto: nombretop( data.child("nombre").val(),0),
  								nombre: nombretop( data.child("nombre").val(),1),
  								nave: nombretop( data.child("nombre").val(),2),
 							   	tiempo: data.child("tiempo").val(),
 							   	tiempoa: "-----",
 							   	pena: data.child("pena").val(),
 							   	km: velocidad(data.child("tiempo").val(),data.child("tam").val()),
 							   	tiempop:"-----",
 							   	color:'39ac39',
 							   	clase:clase,
 							   	repe:data.child("repechaje").val()
 							   	
							};
  							//myElement.id =i;
							//myElement.value=data.child("nombre").val();
							$scope.unitscorriendo[h] = myElement2;
  							h++;

							}
							else{

								 var myElement2 = {
  								auto: nombretop( data.child("nombre").val(),0),
  								nombre: nombretop( data.child("nombre").val(),1),
  								nave: nombretop( data.child("nombre").val(),2),
 							   	tiempo: data.child("tiempo").val(),
 							   	tiempoa: restTimes(data.child("tiempo").val(), $scope.unitscorriendo[h-1].tiempo),
 							   	pena: data.child("pena").val(),
 							   	km: velocidad(data.child("tiempo").val(),data.child("tam").val()),
 							   	tiempop:  restTimes(data.child("tiempo").val(), $scope.unitscorriendo[0].tiempo),
 							   	color:'39ac39',
 							   	clase:clase,
 							   	repe:data.child("repechaje").val()
 							   	
								};
  							//myElement.id =i;
							//myElement.value=data.child("nombre").val();
							$scope.unitscorriendo[h] = myElement2;
  							h++;

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
							console.log("llegando para sumar"+start+"  "+end);
		  		  times = [];
		  		  times1 = start.split(':');
		  		  times2 = end.split(':');

		  		  for (var i = 0; i < 3; i++) {
						times1[i] = (isNaN(parseFloat(times1[i]))) ? 0 : parseFloat(times1[i])
						times2[i] = (isNaN(parseFloat(times2[i]))) ? 0 : parseFloat(times2[i])
						}
						 console.log(times1[2]);
						
						
						var tiempo1=(times1[0]*3600)+(times1[1]*60)+times1[2];
						console.log("tiempo1"+tiempo1);
						var tiempo2=(times2[0]*3600)+(times2[1]*60)+times2[2];
						console.log("tiempo2"+tiempo2);
						var duration=tiempo1-tiempo2;
						console.log("suma"+duration);
						
						//var milliseconds = parseInt((duration%1000)/100);
                        //var seconds = parseInt((duration/1000)%60);
						//var minutes = parseInt((duration/(1000*60))%60)
						//var hours = parseInt((duration/(1000*60*60))%24);
						
						var h=parseInt(duration/3600);
						var min =parseInt((duration-(3600*h))/60); 
						var s= duration -((3600*h)+(min*60));
						
						var se=Math.round(s * 100) / 100
						
						var horas,minutos,segundos,milis;
						if(h<10){
							horas="0"+h;
						}
						else{
							horas=h;
						}
						if(min<10){
							minutos="0"+min;
						}
						else{
							minutos=min;
						}
						if(se<10){
							segundos="0"+se;
						}
						else{
							segundos=se;
						}
						
						
						
						
						
						
						

						return horas+ ":" + minutos + ":" + segundos ;
						
					

		  		  
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



