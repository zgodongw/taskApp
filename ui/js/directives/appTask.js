app.directive("appTask", function() {
    return {
        restrict: "E",
        scope: {
            task: "=",
            moveForward: "="
        },
        templateUrl: "js/directives/appTask.html"
    }

})