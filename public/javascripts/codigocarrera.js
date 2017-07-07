var app = angular.module("sampleApp3", ["firebase"]);

app.controller("SampleCtrlcat3", function($scope, $firebaseArray) {
	
	
	var ref1 = firebase.database().ref().child("carrera");
	$scope.carrera = $firebaseArray(ref1);

	
	

	$scope.carrera.$loaded().then(function () {
  	//console.log($scope.carrera[0].carrera);
  	//console.log($scope.carrera[0].tipo);
  	$scope.carreradirecto=$scope.carrera[0].carrera;
  	$scope.tipodirecto=$scope.carrera[0].tipo;



				var ref = firebase.database().ref().child($scope.carreradirecto+"/General/");
				  	$scope.pilotos = $firebaseArray(ref);
				  	console.log($scope.pilotos);
				  	ref.orderByChild("tiempo").on('value', function(snapshot) {
				  		//console.log("numerod e hios"+snapshot.numChildren());

				  		$scope.unitspe10 = [];
				  		$scope.unitspe9 = [];
				  		$scope.unitspe8 = [];
				  		$scope.unitspe7 = [];
				  		$scope.unitspe6 = [];
				  		$scope.unitspe5 = [];
				  		$scope.unitspe4 = [];
				  		$scope.unitspe3 = [];
				  		$scope.unitspe2 = [];
				  		$scope.unitspe1 = [];
				  		$scope.unitspe0 = [];

				  		var i0=0;
				  		var i1=0;
				  		var i2=0;
				  		var i3=0;
				  		var i4=0;
				  		var i5=0;
				  		var i6=0;
				  		var i7=0;
				  		var i8=0;
				  		var i9=0;
				  		var i10=0;





				  		 
				  		 $scope.unitsabandono = [];
				  		 $scope.unitsdesca = [];
				  		 $scope.descalificado = [];
				  		 var i=0;
				  		 var j=0;
				  		 var k=0;
				  		 var h=0;
				  		 var m=0;
  						snapshot.forEach(function(data) {
							//console.log(data.child("nombre").val());

							//prueba especial 10
							if(data.child("pe").val()=='PE10'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i10==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe10[i10] = myElement2;
  											i10++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe10[i10-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe10[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe10[i10] = myElement2;
  											i10++;

									}


								}

							}

							//prueba especial 9
							if(data.child("pe").val()=='PE9'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i9==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe9[i9] = myElement2;
  											i9++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe9[i9-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe9[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe9[i9] = myElement2;
  											i9++;

									}


								}

							}

							//prueba especial 8
							if(data.child("pe").val()=='PE8'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i8==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe8[i8] = myElement2;
  											i8++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe8[i8-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe8[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe8[i8] = myElement2;
  											i8++;

									}


								}

							}

							//prueba especial 7
							if(data.child("pe").val()=='PE7'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i7==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe7[i7] = myElement2;
  											i7++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe7[i7-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe7[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe7[i7] = myElement2;
  											i7++;

									}


								}

							}

							//prueba especial 6
							if(data.child("pe").val()=='PE6'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i6==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe6[i6] = myElement2;
  											i6++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe6[i6-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe6[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe6[i6] = myElement2;
  											i6++;

									}


								}

							}

							//prueba especial 5
							if(data.child("pe").val()=='PE5'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i5==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe5[i5] = myElement2;
  											i5++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe5[i5-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe5[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe5[i5] = myElement2;
  											i5++;

									}


								}

							}

							//prueba especial 4
							if(data.child("pe").val()=='PE4'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i4==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe4[i4] = myElement2;
  											i4++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe4[i4-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe4[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe4[i4] = myElement2;
  											i4++;

									}


								}

							}

							//prueba especial 3
							if(data.child("pe").val()=='PE3'){
								console.log("dentro pe3");
								if(data.child("estado").val()=='FINALIZO'){
									console.log("dentro pe3 finalizado");

									if(i3==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe3[i3] = myElement2;
  											i3++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe3[i3-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe3[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe3[i3] = myElement2;
  											i3++;

									}


								}

							}

							//prueba especial 2
							if(data.child("pe").val()=='PE2'){
								//console.log("dentro pe2");
								if(data.child("estado").val()=='FINALIZO'){
									//console.log("dentro pe2 FINALIZO");

									if(i2==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe2[i2] = myElement2;
  											i2++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe2[i2-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe2[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe2[i2] = myElement2;
  											i2++;

									}


								}

							}

							//prueba especial 1
							if(data.child("pe").val()=='PE1'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i1==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe1[i1] = myElement2;
  											i1++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe1[i1-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe1[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe1[i1] = myElement2;
  											i1++;

									}


								}

							}


							//prueba especial clasificacion
							if(data.child("pe").val()=='CLASIFICACION'){
								if(data.child("estado").val()=='FINALIZO'){


									if(i0==0){

								 			var myElement2 = {
											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: "-----",
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:"-----",
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
											};
  							
											$scope.unitspe0[i0] = myElement2;
  											i0++;

									}
									else{

								 			var myElement2 = {
  											auto: nombretop( data.child("nombre").val(),0),
  											nombre: nombretop( data.child("nombre").val(),1),
  											nave: nombretop( data.child("nombre").val(),2),
 							   				tiempo: data.child("tiempo").val(),
 							   				tiempoa: restTimes(data.child("tiempo").val(), $scope.unitspe0[i0-1].tiempo),
 							   				pena: data.child("pena").val(),
 							   				km: velocidad(data.child("tiempo").val(),data.child("dis").val()),
 							   				tiempop:  restTimes(data.child("tiempo").val(), $scope.unitspe0[0].tiempo),
 							   				estado:data.child("estado").val(),
 							   				color:'39ac39',
 							   				clase:data.child("clase").val(),
 							   				pe:data.child("pe").val()
 							   	
											};
											$scope.unitspe0[i0] = myElement2;
  											i0++;

									}


								}

							}


							


							if(data.child("estado").val()=='ABANDONO'){


								

								 var myElement = {
  								auto: nombretop( data.child("nombre").val(),0),
  								nombre: nombretop( data.child("nombre").val(),1),
  								nave: nombretop( data.child("nombre").val(),2),
 							   	tiempo: data.child("tiempo").val(),
 							   	tiempoa: "-------",
 							   	pena: data.child("pena").val(),
 							   	km: "------",
 							   	tiempop: "------",
 							   	estado:data.child("estado").val(),
 							   	color:'b9936c',
 							   	clase:data.child("clase").val(),
 							   	pe:data.child("pe").val()
 							   	
							};
  							//myElement.id =i;
							//myElement.value=data.child("nombre").val();
							$scope.unitsabandono[j] = myElement;
  							j++;

							


							}



							if(data.child("estado").val()=='DESCALIFICADO'){


								

								 var myElement4 = {
  								auto: nombretop( data.child("nombre").val(),0),
  								nombre: nombretop( data.child("nombre").val(),1),
  								nave: nombretop( data.child("nombre").val(),2),
 							   	tiempo: data.child("tiempo").val(),
 							   	tiempoa: "-------",
 							   	pena: data.child("pena").val(),
 							   	km: "---------",
 							   	tiempop: "------",
 							   	estado:data.child("estado").val(),
 							   	color:'eca1a6',
 							   	clase:data.child("clase").val(),
 							   	pe:data.child("pe").val()
 							   	
							};
  							//myElement.id =i;
							//myElement.value=data.child("nombre").val();
							$scope.descalificado[m] = myElement4;
  							m++;

							


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



	

	});



					
					


				  	



		

			        
			       


				  	

				  
			  	
			        
	
		
	
	
	
	
	
	
	});

app.directive('myCustomer', function() {
  return {
    templateUrl: '/baner.html'
  };
});

