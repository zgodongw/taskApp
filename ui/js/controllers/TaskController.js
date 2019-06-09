app.controller("TaskController", ["$scope", "$interval",function($scope, $interval) {
    var taskList = this;

    var colors = {
        "#546e7a": "blue-grey darken-1",
        "#388e3c":"green darken-2",
        "#424242":"grey darken-3",
        "#1565c0":"blue darken-3",
        "#ad1457":"pink darken-3",
    }

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
    TODO: Remeber to add color
    */ 
    taskList.tasks = [
        {
            id: 1,
            title: "Hello",
            desc: "World",
            type: 1,
            color: "blue-grey darken-1"
        },
        {
            id: 2,
            title: "Do stuff",
            desc: "Get it done ASAP",
            type: 1,
            color: "green darken-2"
        },
        {
            id: 3,
            title: "Next",
            desc: "One",
            type: 2,
            color: "grey darken-3"
        }
    ]


    taskList.moveForward = function (index) {

        taskList.tasks.forEach(item => {
            if (item.id === index) {
                if (item.type < 4) {
                    item.type = item.type + 1
                }
            }
        })
        
    }
    taskList.moveBack = function (index) {

        taskList.tasks.forEach(item => {
            if (item.id === index) {
                if (item.type > 1) {
                    item.type = item.type - 1
                }
            }
        })
        
    }


    taskList.addNew = function (title, desc, color) {
        var cl;
        var id = Math.floor(Math.random()  * 1000) + 10
        if (colors[color]) {
            cl = colors[color];
        } else {
            cl = "blue-grey darken-1"
        }

        taskList.tasks.push({
            id: id,
            title: title,
            desc: desc,
            type: 1,
            color: cl
        })
        console.log("Success")
    }


}])