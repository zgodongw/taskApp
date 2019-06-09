app.controller("TaskController", ["$scope", "$interval",function($scope, $interval) {
    var taskList = this;

    taskList.newtitle = ""
    taskList.newdesc = ""

    taskList.types = [
        {
            id: 1,
            name: "Pending Tasks",
            color: ""
        },
        {
            id: 2,
            name: "Testing Tasks",
            color: "red lighten-1"
        },
        {
            id: 3,
            name: "Reviewed Tasks",
            color: "indigo lighten-1"
        },
        {
            id: 4,
            name: "Compeleted Tasks",
            color: "blue lighten-1"
        },
    ]
    
    /*
    TODO: Reneber to add color
    */ 
    taskList.tasks = [
        {
            id: 1,
            title: "Hello",
            desc: "World",
            type: 1
        },
        {
            id: 2,
            title: "Hello",
            desc: "World",
            type: 1
        },
        {
            id: 3,
            title: "Next",
            desc: "One",
            type: 2
        }
    ]

    $interval(function() {
            taskList.tasks.push({
                id: 4,
                title: "Testing",
                desc: "Testing desc",
                type: 2,
            })}, 3000, 1 );

    taskList.add = function () {
        taskList.tasks.push({
            title: "Testing",
            desc: "Testing desc",
            type: 2,
        })
        console.log("pushed!")
    }

    taskList.moveForward = function (index) {

        taskList.tasks.forEach(item => {
            if (item.id === index) {
                if (item.type < 4) {
                    item.type = item.type + 1
                }
            }
        })
        
        
    }


}])