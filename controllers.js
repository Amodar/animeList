console.log('im in the controller file');

app.controller("MainCtrl", function($scope, $http) {

  console.log('im in controller: MainCtrl');

  $http.get('http://amodar.github.io/animeList/filteredAnime.json').
  success(function(data, status, headers, config) {
    var tonedDown = [];
    
    for (var i = 0; i < data.length; i++) {
      var yearDate = new Date(data[i].start_date).getFullYear();
      
      tonedDown.push({
        StartDate : yearDate,
        Title : data[i].title,
        Type : data[i].type,
        Genres : data[i].genres.join(", "),
        Episodes : data[i].episodes,
        Rating : data[i].members_score
      });
    }

    console.log('succesfully retrieved the json file');
    console.log('number of objects retrieved: ' + tonedDown.length);
    $scope.data = tonedDown;
  }).
  error(function(data, status, headers, config) {
    console.log('Could not retrieve data');
  });
});
