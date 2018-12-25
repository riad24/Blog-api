/**
 * Created by riad mahmud 3/8/2017.
 */

app.controller('PostController', ['$scope', '$state', 'apiHandlers', function ($scope, $state, apiHandlers) {
    
    /**
     * add new post to API
     * @param post
     */
    $scope.savePost = function (post) {
        apiHandlers.AddNewPost(post).then(function (success) {
            console.log(success);
            $scope.post.title = "";
            $scope.post.description = "";
            $scope.post.author = "";
            $scope.post.date = "";
        }, function (error) {
            console.log(error)
        });
        $scope.load();
    
    };

    /**
     * for edit item send to edit place
     * @param index
     */
    $scope.editItem = function (index) {
        $scope.selectedItemIndex = index;
        $scope.post = $scope.Posts[index];
    };
 

    /**
     * get all post
     */
    apiHandlers.GetAllPost().then(function (success) {
        //  console.log(success)
        $scope.Posts = success;
    }, function (error) {
        console.log(error)
    });
    /**
     * load function ================
     */
    $scope.load = function () {
        apiHandlers.GetAllPost().then(function (success) {
            //  console.log(success)
            $scope.Posts = success;
        }, function (error) {
            console.log(error)
        });

    };

    /**
     * Update POst from API post's
     * @param post
     */
    $scope.updatePost = function (post) {
        console.log(post);

        apiHandlers.UpdatePost(post).then(function (success) {
            console.log(success);
            $scope.post.title = "";
            $scope.post.description = "";
            $scope.post.author = "";
            $scope.post.date = "";
        }, function (error) {
            console.log(error);
        });
        $scope.load()
    };
    /**
     * DELETE POst from API post's
     * @param post
     */
    $scope.DeletePost = function (post) {
        console.log(post);
        apiHandlers.deletePost(post._id).then(function (success) {
            console.log("success");
            console.log(success);
        }, function (error) {
            console.log(error);
        });
        $scope.load();
    };

    /**
     * get Category post
     * @param post
     */
    apiHandlers.GetAllCategory().then(function (success) {
        console.log(success);
        $scope.Categories = success;
    },function (error) {
        console.log(error)
    });
    
    /**
     * get all Post count
     */
    apiHandlers.GetPostcount().then(function (success) {
        console.log(success);
        $scope.postCount = success;
    }, function (error) {
        console.log(error)
    });
    /**
     * get all Category count
     */
    apiHandlers.GetCategorycount().then(function (success) {
        console.log(success);
        $scope.catCount = success;
    }, function (error) {
        console.log(error)
    });

}]);