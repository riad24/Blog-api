/**
 * Created by riad mahmud on 3/8/2017.
 */

app.controller('CatController',['$scope','$state','apiHandlers',function ($scope,$state, apiHandlers) {
    $scope.cat = {};
    
    /**
     * add new Category to API
     * @param cat
     */
    $scope.saveCat = function (cat) {
        console.log(cat);
        apiHandlers.AddNewCategory(cat).then(function (success) {
            console.log(success);
            $scope.cat.category = "";
        },function (error) {
            console.log(error)
        });
        $scope.load();

    };
    
    /**
     * for edit item send to edit place
     * @param index
     */
    $scope.editCat = function (index) {
        $scope.selectedItemIndex = index;
        $scope.cat = $scope.Categories[index];

    };
  
    /**
     * getAll Category post
     * 
     */
    apiHandlers.GetAllCategory().then(function (success) {
        console.log(success);
        $scope.Categories = success;
    },function (error) {
        console.log(error)
    });

    $scope.load = function () {
    apiHandlers.GetAllCategory().then(function (success) {
        console.log(success);
        $scope.Categories = success;
    },function (error) {
        console.log(error)
    });
   };
    /**
     * update Category post Api's
     * @param category
     */
    $scope.updateCat = function (category) {
        console.log(category);
        apiHandlers.updateCategory(category).then(function (success) {
            console.log(success);
            $scope.cat.category = "";
            $scope.Categories = success;
        },function (error) {
            console.log(error)
        });
        $scope.load();
    };
    
    /**
     * DELETE Category post Api's
     * @param cat
     */
    $scope.DeleteCat = function (cat) {
        console.log(cat);
        apiHandlers.deleteCategory(cat._id).then(function (success) {
            console.log("success");
            console.log(success);
        }, function (error) {
            console.log(error);
        });
        $scope.load();
    }
}]);