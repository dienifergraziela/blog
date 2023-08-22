angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http) {
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens/').
    success(function (data) {
      $scope.publicacoes = data;
    }
    );
});

angular.module('blogMax', []);
angular.module('blogMax').controller('RestMax', function ($scope, $http) {
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagem/2').
    success(function (data) {
      $scope.publicacoes = data;
    }
    );
});
/*
angular.module('blogMax', []);
angular.module('blogMax').controller('RestMax', function ($scope, $http, $location){
  var absUrl = $location.absUrl();
  var url = absUrl.split("#/");
  console.log(url);
  console.log($location);
  $http({
    method: 'GET',
    url: 'https://api-rest-post-diegocandido.herokuapp.com/postagem/'+postId
  }).then(function(data){
    $scope.publicacoes = data.data;
    console.log(data.data);
  },function (error){

  });
})*/