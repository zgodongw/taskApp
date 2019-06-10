app.directive("appTask", function() {
    return {
        restrict: "E",
        scope: {
            task: "=",
            moveForward: "=",
            moveBack: "=",
            setSelected: "=",
            deleteTask: "="
        },
        templateUrl: "js/directives/appTask/appTask.html",
        controller: function() {
            //M.AutoInit()
        },
        link: function($scope, elem, attr, ctrl) {
            $scope.edit = function (id) {
                //console.log("Testing edit modal: " + id);
                $scope.setSelected($scope.task);
            }

            $scope.delete = function (id) {
                $scope.deleteTask(id);
            }
        }
    }

})