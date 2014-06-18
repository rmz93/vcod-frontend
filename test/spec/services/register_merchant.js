'use strict';

describe('Service: registerMerchant', function () {

  // load the service's module
  beforeEach(module('vcodAngularApp'));

  // instantiate service
  var registerMerchant;
  beforeEach(inject(function (_registerMerchant_) {
    registerMerchant = _registerMerchant_;
  }));

  it('should do something', function () {
    expect(!!registerMerchant).toBe(true);
  });

});
