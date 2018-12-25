/**
 * Created by Riad mahmud on 3/17/2017.
 */
app.factory('apiHandlers',['$q','$http',function ($q, $http) {

    var Apis = {

        
        /**
         * for post table
         * @param post
         * @returns {Promise}
         * @constructor
         */
        AddNewPost:function (post) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('/PostAdd', post).then(function (data) {
                deferred.resolve(data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },
     GetAllPost :function () {
        var deferred = $q.defer();
        var promise = deferred.promise;
        $http.get('/PostGet').then(function (data) {
            
            deferred.resolve(data.data);
        },function (data) {
            deferred.reject(data)
        });
        return promise;
    },
        GetCategorycount :function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('/CategoryGetcount').then(function (data) {
                console.log(data.data);
                deferred.resolve(data.data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },
        GetPostcount :function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('/PostGetcount').then(function (data) {
                console.log(data.data);
                deferred.resolve(data.data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },


        UpdatePost:function (post) {
        var id = post._id;
         console.log(post);
         console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.put('/PostUpdet/'+id,post).then(function (data) {
                deferred.resolve(data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },

        deletePost:function (id) {
            console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.delete('/PostDelete/'+id).then(function (data) {
                deferred.resolve(data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },
        
        /**
         * for category table
         * @param categoryName
         * @returns {Promise}
         * @constructor
         */

        AddNewCategory:function (categoryName) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('/categoryAdd', categoryName).then(function (data) {
                deferred.resolve(data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },

        GetAllCategory :function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('/categoryGet').then(function (data) {
                console.log(data.data);
                deferred.resolve(data.data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },
        updateCategory:function (categoryName) {
            var id = categoryName._id;
            console.log(categoryName);
            console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.put('/categoryUpdet/'+id,categoryName).then(function (data) {
                deferred.resolve(data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },

        deleteCategory:function (id) {
            console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.delete('/categoryDelete/'+id).then(function (data) {
                deferred.resolve(data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        }

    };
    return Apis;

}]);