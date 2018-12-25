/**
 * Created by mirajehossain on 2/5/2017.
 */
app.factory('PostFactory', ['$q', '$http', function ($q, $http) {

 var post = {
      PostItems :
         $http.get('api/post')
    };
    return{
        getPost:function () {
            return post.PostItems;
        }
    };
}]);

app.factory('AngularPostFactory', ['$q', '$http', function ($q, $http) {

 var post = {
      PostItems :
         $http.get('api/AngularJS')
    };
    return{
        getPost:function () {
            return post.PostItems;
        }
    };
}]);