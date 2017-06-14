var app = angular.module("sampleApp2", ["firebase"]);

app.controller("SampleCtrlcat2", function($scope, $firebaseArray) {
	var ref = firebase.database().ref().child("categoria");
	$scope.categoria = $firebaseArray(ref);
	
	
		
		$scope.LoadSessionData = function(val) {
			
			
			//console log
			        
			        console.log(val);
			        app.value('Categoria',val);
			        
			        var ref = firebase.database().ref().child("piloto/"+val).orderByChild("numero");
				  	$scope.pilotos = $firebaseArray(ref);

				  	//console.log($scope.pilotos);

				  //	var storage = firebase.storage();
				  	//var storageRef = storage.ref();

				  		var i=0;
					$scope.getImageUrl = function(image) {

						var imageUrl;
						console.log("lengando "+i+image);
						i++;

						var storage = firebase.storage();
				  	     storageRef = storage.ref();
   					 
   					 storageRef.child('pilotos/'+image+'.jpg').getDownloadURL().then(function(url) {
        						console.log("url"+url);
        						document.getElementById('imagen'+image).src = url;
        						
 
							}).catch(function(error) {
								console.log(error);
								
 							 // Handle any errors
							});

   					}

				  
			  	
			        
			    }
		
	
	
	
	
	
	
	});



