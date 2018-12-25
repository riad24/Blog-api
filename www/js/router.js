app.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/dashboard");

    // Now set up the states
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "template/dashboard.html",
            controller: "dashboardController"

        })
        .state('addCat', {
            url: "/addCat",
            templateUrl: "template/addcat.html",
            controller: "CatController"
        })
        .state('catList', {
            url: "/catList",
            templateUrl: "template/catlist.html",
            controller: "CatController"
        })
        .state('addPost', {
            url: "/addPost",
            templateUrl: "template/addpost.html",
            controller: "PostController"
        })

        .state('postList', {
            url: "/postList",
            templateUrl: "template/postList.html",
            controller: "PostController"
        })
        .state('catWisePost', {
            url: "/catWisePost",
            templateUrl: "template/cateWisePost.html",
            controller: "PostController"
        })

        .state('changePassword', {
            url: "/changePassword",
            templateUrl: "template/changePassword.html",
            controller: "changePasswordController"
        })
        .state('copyRight', {
            url: "/copyRight",
            templateUrl: "template/copyRight.html",
            controller: "copyRightController"
        })
        .state('inbox', {
            url: "/inbox",
            templateUrl: "template/inbox.html",
            controller: "inboxController"
        })
        .state('login', {
            url: "/login",
            templateUrl: "template/login.html",
            controller: "loginController"
        })

        .state('social', {
            url: "/social",
            templateUrl: "template/social.html",
            controller: "socialController"
        })
        .state('titleSlogan', {
            url: "/titleSlogan",
            templateUrl: "template/titleSlogan.html",
            controller: "TSCController"
        })
        .state('aboutUs', {
            url: "/aboutUs",
            templateUrl: "template/aboutUs.html",
            controller: "AboutController"
        })
        .state('contactUs', {
            url: "/contactUs",
            templateUrl: "template/ContactUs.html",
            controller: "ContactController"
        });

});
