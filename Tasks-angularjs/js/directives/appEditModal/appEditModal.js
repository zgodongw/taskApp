app.directive("appEditModal", function () {
    return {
        restrict: "E",
        scope: {
            selected: "=",
            removeSelected: "=",
            editTask: "="
        },
        templateUrl: "js/directives/appEditModal/appEditModal.html",
        controller: function () {
            M.AutoInit()
        },
        link: function($scope, elem, attr, ctrl) {

            $scope.$watch('selected', function(newValue, oldValue) {
                if (newValue) {
                    $scope.title = $scope.selected.title;
                    $scope.desc = $scope.selected.desc ;
                    $scope.color = $scope.selected.color
                }
            });
            $scope.color =  "";
            $scope.errors = "" 
            $scope.submit = function () {
                if ($scope.title && $scope.desc) {
                    $scope.editTask(
                        $scope.selected.id,
                        $scope.title,
                        $scope.desc,
                        $scope.color
                    )
                    $scope.removeSelected()
                    $scope.title = "";
                    $scope.desc = ""
                    $scope.errors = ""
                    var elem = document.querySelector('#modal1');
                    M.Modal.getInstance(elem).close();
                } else {
                    $scope.errors  = "Title and Description is required!"
                }
            }
            $scope.cancel = function () {
                $scope.removeSelected()
            }
            
            M.updateTextFields();
        }
    }
})