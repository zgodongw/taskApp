package com.zgodongw.amkhuma.Tasks.services;

import com.zgodongw.amkhuma.Tasks.dao.TaskDao;
import com.zgodongw.amkhuma.Tasks.models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private TaskDao taskDao;

    @Autowired
    public TaskService(@Qualifier("taskmysqldao") TaskDao taskDao) {
        this.taskDao = taskDao;
    }

    public List<Task> selectAllTasks() {
        return taskDao.selectAllTasks();
    }

    public Task createNewTask(Task task) {
        return taskDao.insertTask(task);
    }
}
