var app = angular.module('app', ['ngMaterial']);

app.controller('DemoCtrl', function(){

})

app.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }]);