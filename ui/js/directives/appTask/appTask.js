app.directive("appTask", function() {
    return {
        restrict: "E",
        scope: {
            task: "=",
            moveForward: "=",
            moveBack: "="
        },
        templateUrl: "js/directives/appTask/appTask.html",
        controller: function() {
            //M.AutoInit()
        },
        link: function($scope, elem, attr, ctrl) {
            $scope.test = function (id) {
                console.log("Testing edit modal: " + id);
                
            }
        }
    }

})