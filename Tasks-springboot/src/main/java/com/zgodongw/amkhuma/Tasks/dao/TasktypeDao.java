package com.zgodongw.amkhuma.Tasks.dao;

import com.zgodongw.amkhuma.Tasks.models.Tasktype;
import java.util.List;
import java.util.Optional;

public interface TasktypeDao {

    Tasktype insertTask(Tasktype tasktype);
    List<Tasktype> selectAllTasks();
    Optional<Tasktype> selectOneTask(int id);
    Tasktype updateOneTask(int id);
    Tasktype deleteOneTask(int id);
}
