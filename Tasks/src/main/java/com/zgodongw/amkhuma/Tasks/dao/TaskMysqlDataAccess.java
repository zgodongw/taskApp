package com.zgodongw.amkhuma.Tasks.dao;

import com.zgodongw.amkhuma.Tasks.models.Task;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository("taskmysqldao")
public class TaskMysqlDataAccess implements TaskDao {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sf) {
        this.sessionFactory = sf;
    }

    @Override
    public Task insertTask(Task task) {
        Session session = this.sessionFactory.getCurrentSession();
        session.save(task);
        return task;
    }

    @Override
    public List<Task> selectAllTasks() {
        Session session = this.sessionFactory.getCurrentSession();
        return session.createQuery("from Task").list();
    }

    @Override
    public Optional<Task> selectOneTask(int id) {
        Session session = this.sessionFactory.getCurrentSession();
        Task task = (Task) session.get(Task.class, id);
        return Optional.of(task);
    }

    @Override
    public Optional<Task> updateOneTask(int id, Task task) {
        Session session = this.sessionFactory.getCurrentSession();

        Task update = (Task) session.load(Task.class, id);

        update.setTitle(task.getTitle());
        update.setDesc(task.getDesc());
        update.setType(task.getType());
        update.setColor(task.getColor());

        Transaction tx = session.beginTransaction();

        session.update(update);
        session.flush();

        tx.commit();

        return Optional.of(update);
    }

    @Override
    public Optional<Task> deleteOneTask(int id) {
        Session session = this.sessionFactory.getCurrentSession();
        Task task =  (Task) session.load(Task.class, id);
        if (task != null) {
            Transaction tx = session.beginTransaction();
            session.delete(task);
            session.flush();
            tx.commit();
        }
        return Optional.of(task);
    }
}
