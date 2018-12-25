/**
 * Created by riad mahmud on 3/8/2017.
 */

app.controller('TSCController',['$scope','$state','apiHandlers',function ($scope,$state, apiHandlers) {
    $scope.TSC = {}

   $scope.AddTSC = function (TSC) {
       console.log(TSC);
       apiHandlers.AddTitleSlogan(TSC).then(function (success) {
           console.log(success)

       },function (error) {
           console.log(error)
       })
   };
   $scope.updateTSC = function (TSC) {
       console.log(TSC);
       apiHandlers.UpdateTitleSlogan(TSC).then(function (success) {
           console.log("success")
           console.log(success)

       },function (error) {
           console.log(error)
       })
   };

    $scope.editItem = function (index) {
        $scope.selectedItemIndex = index;
        $scope.TSC = $scope.titleSlogan[index];
    };


apiHandlers.GetTitleSlogan().then(function (success) {
    $scope.titleSlogan = success;
    console.log($scope.titleSlogan)
},function (error) {
    console.log(error)
});

}])