package com.zgodongw.amkhuma.Tasks.dao;

import com.zgodongw.amkhuma.Tasks.models.Task;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository("taskmysqldao")
public class TaskMysqlDataAccess implements TaskDao {

    private static List<Task> DB = new ArrayList<>();

    @Override
    public Task insertTask(Task task) {
        DB.add(task);
        return task;
    }

    @Override
    public List<Task> selectAllTasks() {
        return DB;
    }

    @Override
    public Optional<Task> selectOneTask(int id) {
        return DB.stream().filter(task -> task.getId() == id).findFirst();
    }

    @Override
    public Task updateOneTask(int id) {
        return null;
    }

    @Override
    public Task deleteOneTask(int id) {
        return null;
    }
}
