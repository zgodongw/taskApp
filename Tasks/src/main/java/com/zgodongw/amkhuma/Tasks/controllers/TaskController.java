package com.zgodongw.amkhuma.Tasks.controllers;

import com.zgodongw.amkhuma.Tasks.models.Task;
import com.zgodongw.amkhuma.Tasks.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("api/tasks")
@RestController
public class TaskController {

    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping
    List<Task> getAllTasks() {
        return taskService.selectAllTasks();
    }

    @PostMapping(path = "add")
    Task addNewTask(@RequestBody Task task) {
        return taskService.createNewTask(task);
    }

}
