import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs'
import { share } from 'rxjs/operators';

import { Task } from '../models/Task';
import { TaskService } from '../services/task.service';
import { TaskType } from '../models/TaskType';
import { TaskTypeService } from '../services/task-type.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {

  tasks: Observable<Task[]>;
  taskTypes: TaskType[];

  constructor(private taskService: TaskService, private taskTypeService: TaskTypeService) {

  }

  ngOnInit() {
    this.taskTypeService.getTaskTypes().subscribe(types => this.taskTypes = types);
    this.tasks = this.taskService.getTasks().pipe(share())
  }

}
