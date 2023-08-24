angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http) {
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens/').
    success(function (data) {
      $scope.publicacoes = data;
    }
    );
});

angular.module('blog2', []);
angular.module('blog2').controller('Rest2', function ($scope, $http) {
  $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagem/0').
    success(function (data) {
      $scope.publicacoes = data;
    }
    );
});