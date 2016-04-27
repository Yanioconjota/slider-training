var app = angular.module('exampleApp', []);

	app.controller('WelcomeCtrl', function(){
		var wctrl = this;

 		wctrl.firstName = '';
	})
	
	app.run(function($rootScope){
		// para inspeccionar el scope acceder por batarang, seleccionar el scope y escribir $scope en la consola
		// $scope.$$watcher[0].get accede al watcher del scope

		 	/*$interval(function(){
				$rootScope.now = new Date().toUTCString();
				Angular revisa la lista de watchers con el digest y los dispara
				$rootScope.$digest();
			}, 1000);*/
		
		var batmanDetector = function(){
			return wctrl.firstName === 'Batman';
		};
		$scope.$watch(batmanDetector,function(isBatman){
			if(isBatman){
				wctrl.prefix = 'Don ';
			}
			else {
				wctrl.prefix = '';
			}
		});
	});