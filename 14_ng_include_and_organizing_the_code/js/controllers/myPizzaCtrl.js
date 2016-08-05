angular.module("myPizza").controller("myPizzaCtrl", function($scope,$http){
    $scope.name = "My Pizza";
    $scope.clients = [];

    var listClient = function(){
        $http.get('post.php').success(function(data,status){
            console.log(data);
            $scope.clients = data;
        });
    };

    var addClient = function(client){
        $http.post('post.php',client  ).success(function(ret){
            console.log(ret);
            listClient();
        });
    };

    listClient();

    $scope.add = function(client){
        //$scope.clients.push(angular.copy(client));
        addClient(angular.copy(client));
        client.name = "";
        client.tel = "";
        client.address = "";
        client.order = "";
        $scope.formClient.$setPristine();
    };
    $scope.edit = function(client){
        $scope.client = client;
        $scope.editing = true;
    };
    $scope.save = function(client){
        //$scope.client = angular.copy($scope.client);
        addClient(angular.copy($scope.client));
        $scope.editing = false;
        $scope.formClient.$setPristine();
        delete $scope.client ;
    };
    $scope.destroy = function(client){
        $scope.clients.splice($scope.clients.indexOf(client), 1);
    };

    $scope.orderBy = function(col){
        if($scope.asc){
            $scope.orderby = col;
            $scope.asc = false;
        }else{
            $scope.orderby = col;
            $scope.asc = "reverse";
        }

    };
});