app.directive("appNewTask", function () {
    return {
        restict: "E",
        scope: {
            addNew: "="
        },
        templateUrl: "js/directives/appNewTask/appNewTask.html",
        controller: function () {
            M.AutoInit()
        
        },
        link: function($scope, elem, attr, ctrl) {
            $scope.title = "";
            $scope.desc = "";
            $scope.color = "";
            $scope.errors = "" 
            $scope.submit = function () {
                if ($scope.title && $scope.desc) {
                    $scope.addNew($scope.title, $scope.desc, $scope.color)

                    $scope.title = "";
                    $scope.desc = ""
                    $scope.errors = ""
                    var elem = document.querySelector('#modal2');
                    M.Modal.getInstance(elem).close();
                } else {
                    $scope.errors  = "Title and Description is required!"
                }
            }
            
            M.updateTextFields();
        }
    }
})