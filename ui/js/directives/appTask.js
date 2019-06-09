app.directive("appTask", function() {
    return {
        restrict: "E",
        scope: {
            task: "=",
            moveForward: "=",
            moveBack: "="
        },
        templateUrl: "js/directives/appTask.html",
        controller: function() {
            //M.AutoInit()
        }
    }

})