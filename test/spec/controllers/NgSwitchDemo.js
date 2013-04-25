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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
