


(function (global) {
    var ds ={};

    ds.empService =function ($q, $http) {    //$q是angularJS 专门做 和 promise的变量.  用来解析"后台发来的数据"   $http:增加http协议 实现-add delete replace增删改查
        var url = "/rest/es/emp";           // request for API
        return {                            // 定义：service return 的内容
            getAllEmp: function () {
                var defer =$q.defer();

                $http.get(url).then(function (resp) {          //response body:返回一个JSN object.
                    defer.resolve(resp.data);                   // defer.resolve 解析数据
                })

                return defer.promise;
            },


            deleteOneEmp: function (name) {
                var defer =$q.defer();
                $http.delete (url + "/" + name).then(function (resp) {
                    defer.resolve(resp.data);
                });
                return defer.promise;
            },


            getOneEmp: function (name) {
                var defer =$q.defer();
                $http.get(url + "/" + name).then(function (resp) {
                    defer.resolve(resp.data);
                });
                return defer.promise;
            },


            updateOneEmp: function (emp) {
                var defer = $q.defer();
                $http.put(url, emp).then(function (resp) {
                    defer.resolve(resp.data);
                });
                return defer.promise;
            },

            saveOneEmp: function (emp) {
                var defer =$q.defer();
                $http.post(url, emp).then(function (resp) {
                    defer.resolve(resp.data);
                });
                return defer.promise;
            }
        }
    }


    global.ds =ds;

})(window);