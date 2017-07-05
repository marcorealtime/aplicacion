var app = angular.module("sampleApp2", ["firebase"]);

app.controller("SampleCtrlcat2", function($scope, $firebaseArray) {
	

	$scope.appState="RALLY";
	$scope.appState2="CIRCUITO";
	 
			        var ref = firebase.database().ref().child("calendario").orderByChild("lugar");
				  	$scope.calendario = $firebaseArray(ref);

				  	$scope.getImageUrl = function(image) {

						var imageUrl;
						console.log("lengando "+image);
						

						var storage = firebase.storage();
				  	     storageRef = storage.ref();
   					 
   					 storageRef.child('calendario/'+image+'.jpg').getDownloadURL().then(function(url) {
        						console.log("url"+url);
        						document.getElementById('imagen'+image).src = url;
        						
 
							}).catch(function(error) {
								console.log(error);
								
 							 // Handle any errors
							});
					

   					}
	
		
		
	
	
	
	
	
	
	});



