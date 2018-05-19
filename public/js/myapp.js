/* angular用来创建  ng-controlor-----angular js directives;        DAO: data access objegt */


var app = angular.module('mainApp', ['ngRoute', 'ngResource']); /* moduled的名字为 ngroute   ngRoute    ngResource:数据绑定 */

app.factory('es', ['$q', '$http', ds.empService]);  /* es是factroy创建的service名称。 angular用来创建 serviced的方法 factory创建方法，  $q    */

app.controller("mainCtrl", ["$scope", function ($scope) { /* mainCtrl 相当  */

}]);

app.controller("addCtrl", ["$scope", "es", "$location", function ($scope, es, $location) {
    $scope.doClear = function () {
        $scope.emp = {};
    }
    $scope.doSubmit = function(){
        es.saveOneEmp($scope.emp).then(function(result){
            $location.path("/home");
        });
    }
}]);

app.controller("homeCtrl", ["$scope", "es", function ($scope, es) {
    es.getAllEmp().then(function (res) {
        $scope.empList = res;
    });
    $scope.doDelete = function (index) {
        var name = $scope.empList[index].name;
        es.deleteOneEmp(name).then(function () {
            $scope.empList.splice(index, 1);
        })
    };
}]);

app.controller("updateCtrl", ["$scope", "es", "$location", "$routeParams",
    function ($scope, es, $location, $routeParams) {
        var name = $routeParams.name;
        es.getOneEmp(name).then(function(resp){
            $scope.emp = resp;
            $scope.originalEmp = angular.copy($scope.emp);
        })
        $scope.doClear = function(){
            $scope.emp = angular.copy($scope.originalEmp);
        }
        $scope.doSubmit = function(){
            es.updateOneEmp($scope.emp).then(function(result){
                $location.path("/home");
            })
        }
    }]);

app.config(["$routeProvider", function ($routeProvider) {           //$routeProvider is the keyword to define 前台路由。
    $routeProvider.when("/home", {
        templateUrl: 'template/home.html',  //templateUrl作用是：从当前跳到哪个页面。
        controller: "homeCtrl"              //
    }).when("/add", {
        templateUrl: 'template/add.html',
        controller: "addCtrl"
    }).when("/show", {
        templateUrl: 'template/show.html',
    }).when("/update/:name", {
        templateUrl: 'template/update.html',
        controller: "updateCtrl"
    }).otherwise({
        redirectTo: "/home"
    })
}])
