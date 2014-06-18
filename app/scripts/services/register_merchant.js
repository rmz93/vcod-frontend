'use strict';

app
  .factory('registerMerchant', function ($http) {
    // Service logic
    // ...
    var factory;

    factory.primaryData = {
      username : '',
      password : '',
      name : '',
      mobile : ''
    };

    factory.secondaryData = {
      merchant_id : '',
      landline : '',
      business_type : '',
      official_landline1 : '',
      official_landline2 : '',
      official_landline3 : '',
      official_mobile : '',
      official_email : '',
      Registered_Address : '',
      Registered_City : '',
      Registered_State : '',
      Registered_Pincode : '',
      operating_address : '',
      operating_city : '',
      operating_state : '',
      operating_pincode : '',
      registered_country : '',
      operating_country : '',
      Business_category : '',
      pancard_no : '',
      pancard_name : '',
      Name : '' /*Organisation Name*/
    };

    factory.primaryRegister = function (primaryData) {
      $http(
      {
        method: 'POST',
        url: '/someUrl',
        data : factory.primaryData
      })
      .success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available

        //data.message
        //data.view

        // Print Check Email to activate account

        //redirect to homepage

      })
      .error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.

      });
    };

    factory.secondaryRegister = function (secondaryData) {
      // body...
    };


    // Public API here
    return factory;
  });
