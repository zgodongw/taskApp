core.filter("tasktype", function() {
    return function(tasks, type) {
        return tasks.filter(function(task) {
            return task.type == parseInt(type);
        })
    }
})