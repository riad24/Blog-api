/**
 * Created by riad mahmud on 3/8/2017.
 */

app.controller('AboutController', ['$scope', '$state', 'apiHandlers', function ($scope, $state, apiHandlers) {
    $scope.about = {};

    /**
     * for edit item send to edit place :p
     * @param index
     */
    $scope.editItem = function (index) {
        $scope.selectedItemIndex = index;
        $scope.about = $scope.About[index];
    };

    /**
     * get about
     */
    apiHandlers.GetAbout().then(function (success) {
        //  console.log(success)
        $scope.About = success;
    }, function (error) {
        console.log(error)
    });

    /**
     * add new about to API
     * @param about
     */
    $scope.saveAbout = function (about) {
        console.log(about);
        apiHandlers.AddAbout(about).then(function (success) {
            console.log(success)
        }, function (error) {
            console.log(error)
        })
    };

    /**
     * Update about from API about's
     * @param about
     */
    $scope.updateAbout = function (about) {
        console.log(about);
        apiHandlers.UpdateAbout(about).then(function (success) {
            console.log("success");
            console.log(success)
        }, function (error) {
            console.log("error");
            console.log(error)
        })
    };


}]);