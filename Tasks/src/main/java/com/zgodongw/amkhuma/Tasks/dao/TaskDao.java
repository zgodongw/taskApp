package com.zgodongw.amkhuma.Tasks.dao;

import com.zgodongw.amkhuma.Tasks.models.Task;

import java.util.List;
import java.util.Optional;

public interface TaskDao {

    Task insertTask(Task task);
    List<Task> selectAllTasks();
    Optional<Task> selectOneTask(int id);
    Task updateOneTask(int id);
    Task deleteOneTask(int id);
}
