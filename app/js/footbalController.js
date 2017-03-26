angular.module('app')
.controller('footballController', ['$scope','$http','$sce', function($scope, $http, $sce) {


var url = 'http://api.football-data.org/v1/competitions/426/leagueTable/?matchday=30';

$sce.trustAsResourceUrl(url)
  
  $scope.tables = {};
  

    $http.get('http://api.football-data.org/v1/competitions/426/leagueTable/?matchday=30')
    .then(function(tables){
      $scope.tables = tables.data;
    })
 
 $.ajax({
  headers: { 'X-Auth-Token': '288c828b5f10400b938668a9874af0f6' },
  url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  // do something with the response, e.g. isolate the id of a linked resource        
  var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
  var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
  var teamId = res[1];
  console.log(teamId);
});



}]);