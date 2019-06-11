package com.zgodongw.amkhuma.Tasks.dao;

import com.zgodongw.amkhuma.Tasks.models.Task;

import java.util.List;
import java.util.Optional;

public interface TaskDao {

    Task insertTask(Task task);
    List<Task> selectAllTasks();
    Optional<Task> selectOneTask(int id);
    Optional<Task> updateOneTask(int id, Task task);
    Optional<Task> deleteOneTask(int id);
}
