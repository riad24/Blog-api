/**
 * Created by riad mahmud on 3/8/2017.
 */

app.controller('ContactController', ['$scope', '$state', 'apiHandlers', function ($scope, $state, apiHandlers) {
    $scope.contact = {};


    apiHandlers.GetContact().then(function (succes) {
        console.log(succes);
    },function (error) {
        console.log(error);
    });

    $scope.saveContact = function (contact) {
            apiHandlers.AddContact(contact).then(function (succes) {
              console.log(succes);
            },function (error) {
                console.log(error);
            });
    };

    $scope.updateContact = function (contact) {
        apiHandlers.UpdateContact(contact).then(function (succes) {
            console.log(succes);
        },function (error) {
            console.log(error);
        });
    };
}]);