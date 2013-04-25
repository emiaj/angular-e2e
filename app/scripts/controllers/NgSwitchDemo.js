'use strict';

angular.module('angularE2eApp')
  .controller('NgSwitchDemoCtrl', function ($scope) {    
	$scope.options = ['1st','2nd','3rd'];
	$scope.selection = $scope.options[0];
  });
