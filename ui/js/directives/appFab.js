app.directive("appFab", function() {
    return {
        restrict: "E",
        scope: {},
        templateUrl : "js/directives/appFab.html",
        controller: function () {
            M.AutoInit()
        }
    }
})