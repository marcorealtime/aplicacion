var app = angular.module("sampleApp2", ["firebase"]);

app.controller("SampleCtrlcat2", function($scope, $firebaseArray) {
	var ref = firebase.database().ref().child("categoria");
	$scope.categoria = $firebaseArray(ref);
	
	
		
		$scope.LoadSessionData = function(val) {
			
			
			//console log
			        
			        console.log(val);
			        app.value('Categoria',val);
			        
			        var ref = firebase.database().ref().child("ranking/"+val).orderByChild("puntos");
				  	$scope.ranking = $firebaseArray(ref);
				  	

				  	//console.log($scope.ranking);

				  //	var storage = firebase.storage();
				  	//var storageRef = storage.ref();

				  	

				  
			  	
			        
			    }
		
	
	
	
	
	
	
	});

app.filter('reverse', function() {
      function toArray(list) {
         var k, out = [];
         if( list ) {
            if( angular.isArray(list) ) {
               out = list;
            }
            else if( typeof(list) === 'object' ) {
               for (k in list) {
                  if (list.hasOwnProperty(k)) { out.push(list[k]); }
               }
            }
         }
         return out;
      }
      return function(items) {
         return toArray(items).slice().reverse();
      };
   });