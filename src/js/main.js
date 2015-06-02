angular
  .module('angularAddresses', [])

  .controller('Main', function () {
    var vm = this;

    vm.people = [
      {name: 'Ben', twitter: '@ben123', phone: '+1 615 234 5678'},
      {name: 'Dan', twitter: '@dandan', phone: '(615) 234-5678'},
      {name: 'Elsa', twitter: '@letitgo', phone: '615-234-5678'},
      {name: 'Amanda', twitter: '@princessamanda', phone: '1 615 234 5678'},
      {name: 'Charity', twitter: '@nonprofit', phone: '615.234.5678'}
    ];
  });
