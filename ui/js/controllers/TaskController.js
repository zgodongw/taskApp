app.controller("TaskController", ["$scope", "taskApi",function($scope, taskApi) {
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

    taskCrtl.tasks = []
    
    taskApi.getTasks()
    .then(
        function successCallback(response) {
            taskCrtl.tasks = response
        }
    );

    //   console.log("====> ", taskCrtl)

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
        
}


taskCrtl.addNew = function (title, desc, color) {
    var cl;
    var id = Math.floor(Math.random()  * 1000) + 10
    if (color) {
        cl = color;
    } else {
        cl = "blue-grey darken-1"
    }

    var newTask = {
        id: id,
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

    taskApi.delete(id)
    .then(function(response) {
        console.log(response)
        taskApi.getTasks()
        .then(function (response) {
            taskCrtl.tasks = response 
        })
    })
    // taskCrtl.tasks = taskCrtl.tasks.filter(function (item) {
    //     return item.id !== id
    // })
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