'use strict';

describe('Controller: NewMerchantCtrl', function () {

  // load the controller's module
  beforeEach(module('vcodAngularApp'));

  var NewMerchantCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewMerchantCtrl = $controller('NewMerchantCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
