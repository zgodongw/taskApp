import { Component, OnInit } from '@angular/core';
import { TaskType } from '../models/TaskType';
import { TaskTypeService } from '../services/task-type.service';

@Component({
  selector: 'app-task-types',
  templateUrl: './task-types.component.html',
  styleUrls: ['./task-types.component.css']
})
export class TaskTypesComponent implements OnInit {

  taskTypes : TaskType[]

  constructor(private taskTypeService : TaskTypeService) { }

  ngOnInit() {
    this.getTaskTypes()
  }

  getTaskTypes() : void {
    this.taskTypeService.getTaskTypes().subscribe(types => this.taskTypes = types)
  }
 
}
