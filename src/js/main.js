angular
  .module('angularAddresses', [])

  .controller('Main', function ($scope) {
    $scope.names = [
      'Ben',
      'Charity',
      'Dan',
      'Elsa',
      'Amanda'
    ];
  });
