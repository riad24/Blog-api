
var app = angular.module('AdminApp',['ui.router' ]);

app.constant('ApiEndpoint',{
    url:'http://localhost:3002/api'
});


app.config(['$compileProvider',function($compileProvider){
    $compileProvider.debugInfoEnabled(false);
    // angular.reloadWithDebugInfo();
}])

