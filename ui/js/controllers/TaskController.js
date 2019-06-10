app.controller("TaskController", ["$scope", "$interval",function($scope, $interval) {
    var taskCrtl = this;

    var colors = {
        "#546e7a":"blue-grey darken-1",
        "#388e3c":"green darken-2",
        "#424242":"grey darken-3",
        "#1565c0":"blue darken-3",
        "#ad1457":"pink darken-3",
    }

    taskCrtl.newtitle = ""
    taskCrtl.newdesc = ""

    taskCrtl.types = [
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
    
    taskCrtl.tasks = [
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

taskCrtl.moveForward = function (index) {

     taskCrtl.tasks.forEach(item => {
            if (item.id === index) {
                if (item.type < 4) {
                    item.type = item.type + 1
                }
            }
        })
        
    }

taskCrtl.moveBack = function (index) {

     taskCrtl.tasks.forEach(item => {
            if (item.id === index) {
                if (item.type > 1) {
                    item.type = item.type - 1
                }
            }
        })
        
    }


taskCrtl.addNew = function (title, desc, color) {
        var cl;
        var id = Math.floor(Math.random()  * 1000) + 10
        if (color) {
            cl = color;
        } else {
            cl = "blue-grey darken-1"
        }

     taskCrtl.tasks.push({
            id: id,
            title: title,
            desc: desc,
            type: 1,
            color: cl
        })
        console.log("Success")
    }

taskCrtl.editTask = function (id, title, desc, color) {
        taskCrtl.tasks.forEach(item => {
            if (item.id === id) {
                item.title = title;
                item.desc = desc;
                item.color = color;
            }
            return item;
        })
    }

taskCrtl.deleteTask = function (id) {
        taskCrtl.tasks = taskCrtl.tasks.filter(function (item) {
            return item.id !== id
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
     console.log(taskCrtl.selected)
    }

}])