import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { TaskService } from '../services/task.service';
import { TaskType } from '../models/TaskType';
import { TaskTypeService } from '../services/task-type.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  taskTypes: TaskType[];

  constructor(private taskService: TaskService, private taskTypeService: TaskTypeService) {

  }

  ngOnInit() {
    this.taskTypeService.getTaskTypes().subscribe(types => this.taskTypes = types);
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnChanges() {
    console.log("changes occured");
    
  }
}
