'use strict';

app
  .controller('NewMerchantCtrl', function ($scope,registerMerchant) {
    $scope.newMerchantPrimary = {
      username : '',
      password : '',
      name : '',
      mobile : ''
    };

    $scope.newMerchantRegisterPrimary = function () {
    	registerMerchant.primaryRegister($scope.newMerchantPrimary);
    };
  });
