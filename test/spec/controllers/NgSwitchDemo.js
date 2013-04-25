'use strict';

describe('Controller: NgSwitchDemoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularE2eApp'));

  var NgSwitchDemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgSwitchDemoCtrl = $controller('NgSwitchDemoCtrl', {
      $scope: scope
    });
  }));

  it('has three options',function(){
    expect(scope.options.length).toBe(3);
    expect(scope.options).toEqual(['1st','2nd','3rd']);
  });
  it('sets the first option as selected',function(){
    expect(scope.selection).toBe(scope.options[0]);
  });

});
