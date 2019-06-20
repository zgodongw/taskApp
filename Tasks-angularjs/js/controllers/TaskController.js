
app.controller("TaskController", ["$scope", "taskApi",function($scope, taskApi) {
    var taskCrtl = this;
    $scope.isTaskClicked = false;
    $scope.clickedTask
    $scope.originalTaskXPos
    $scope.mouseX
    $scope.mouseY
    $scope.landingQuad


    $scope.taskOnClick = function(task){
        $scope.isTaskClicked = true;
        $scope.clickedTask = task
    }

    $scope.taskUnclicked = function(){
        $scope.isTaskClicked = false;
        var tasksSpace = document.getElementById("tasksSpace")
        var tasksSpaceMinX = tasksSpace.getBoundingClientRect().left
        var tasksSpaceMaxX = tasksSpace.getBoundingClientRect().left + tasksSpace.offsetWidth
        var tasksSpaceTotalLength = tasksSpaceMinX + tasksSpaceMaxX
        var quadOne = tasksSpaceMinX;
        var quadTwo = percentage(tasksSpaceTotalLength, 25);
        var quadThree = percentage(tasksSpaceTotalLength, 50) - tasksSpaceMinX / 4;
        var quadFour = percentage(tasksSpaceTotalLength, 75) - tasksSpaceMinX / 2;

        if ($scope.mouseX > quadOne && $scope.mouseX < quadTwo)
            $scope.landingQuad = 1
        else if ($scope.mouseX > quadTwo && $scope.mouseX < quadThree)
            $scope.landingQuad = 2                
        else if ($scope.mouseX > quadThree && $scope.mouseX < quadFour)
            $scope.landingQuad = 3
        else if ($scope.mouseX > quadFour)
            $scope.landingQuad = 4
        dropTask()
    }

    function percentage(num, percent){
        return ((num / 100) * percent).toFixed()
    }

    $scope.onMouseMove = function($event){
        if ($scope.isTaskClicked){
            $scope.mouseX = $event.x 
            $scope.mouseY = $event.y
            
            var element = document.getElementById(`${$scope.clickedTask.title}${$scope.clickedTask.id}`)
            element.style.position = "absolute";
            element.style.left = $event.x - (element.offsetWidth / 2) +'px';
            element.style.top = $event.y - (element.offsetHeight / 2) +'px';
        }
    }

    function dropTask (){
        if ($scope.clickedTask){
            $scope.clickedTask.type = $scope.landingQuad
        }

        taskApi.update($scope.clickedTask)
        .then(
            function successCallback(response){
                taskCrtl.tasks.forEach(item => {
                    if (item.id === response.id) {
                        item = response
                    }
                })
            }
        )
    }

    taskCrtl.types = [
        {
            id: 1,
            name: "TO-DO",
            color: ""
        },
        {
            id: 2,
            name: "Doing",
            color: "red lighten-1"
        },
        {
            id: 3,
            name: "Done",
            color: "indigo lighten-1"
        },
        {
            id: 4,
            name: "Review",
            color: "blue lighten-1"
        },
    ]

    taskCrtl.tasks = []
    
    taskApi.getTasks()
        .then(
            function successCallback(response) {
                taskCrtl.tasks = response
            }
        );


    taskCrtl.moveForward = function (index) {

        taskCrtl.tasks.forEach(item => {
            if (item.id === index) {
                if (item.type < 4) {
                    item.type = item.type + 1
                    taskApi.update(item)
                    .then(
                        function successCallback(response){
                            item = response
                        }
                    )
                }
            }
        })
        $scope.isTaskClicked = false  
    }

    taskCrtl.moveBack = function (index) {

        taskCrtl.tasks.forEach(item => {
            if (item.id === index) {
                if (item.type > 1) {
                    item.type = item.type - 1
                    taskApi.update(item)
                    .then(
                        function successCallback(response){
                            item = response
                        }
                    )
                }
            }
        })

        $scope.isTaskClicked = false
            
    }


    taskCrtl.addNew = function (title, desc, color) {
        var cl;
        if (color) {
            cl = color;
        } else {
            cl = "blue-grey darken-1"
        }

        var newTask = {
            title: title,
            desc: desc,
            type: 1,
            color: cl
        }

        taskApi.addNew(newTask)
        .then(
            function successCallback(response){
                taskCrtl.tasks.push(response)
            }
        )
        .catch(
            function errorCallback(err){

            }
        )
    }

    taskCrtl.editTask = function (id, title, desc, color) {
        taskCrtl.tasks.forEach(item => {
            if (item.id === id) {
                item.title = title;
                item.desc = desc;
                item.color = color;
                taskApi.update(item)
                .then(function(response){
                    item = response
                })
            }
            return item;
        })
    }

    taskCrtl.deleteTask = function (id) {
        console.log("delete called on task ID : " + id)
        taskApi.delete(id)
        .then(function(response) {
            taskApi.getTasks()
            .then(function (response) {
                taskCrtl.tasks = response 
            })
        })
        
    }

    taskCrtl.selected = {
        id: Number,
        title: "",
        desc: "",
        type: Number,
        color: String
    }

    taskCrtl.setSelected = function (task) {
        taskCrtl.selected = task;
    }

    taskCrtl.removeSelected = function () {
        taskCrtl.selected = null;
    }

}])