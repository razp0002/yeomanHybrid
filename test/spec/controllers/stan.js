'use strict';

describe('Controller: StanCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var StanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StanCtrl = $controller('StanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StanCtrl.awesomeThings.length).toBe(3);
  });
});
