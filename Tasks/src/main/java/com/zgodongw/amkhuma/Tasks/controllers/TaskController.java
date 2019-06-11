package com.zgodongw.amkhuma.Tasks.controllers;

import com.zgodongw.amkhuma.Tasks.models.Task;
import com.zgodongw.amkhuma.Tasks.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("api/tasks")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TaskController {

    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping
    List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping(path="{id}")
    Task getTasks(@PathVariable("id") int id) {
        return taskService.getOneTask(id);
    }

    @PostMapping(path = "add")
    Task addNewTask(@RequestBody Task task) {
        return taskService.createNewTask(task);
    }

    @PutMapping(path = "update/{id}")
    Task updateTask(@PathVariable("id") int id, @RequestBody Task task) {
        return taskService.updateOneTask(id, task);
    }

    @DeleteMapping(path = "delete/{id}")
    Task deleteTask(@PathVariable("id") int id) {
        return taskService.deleteTask(id);
    }

}
