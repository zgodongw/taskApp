import { Injectable } from '@angular/core';
import { TaskType } from '../models/TaskType';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeService {

  taskTypes : TaskType[] = [
    {
      id : 1,
      colour : '',
      name : 'Pending Tasks'
    },
    {
      id : 2,
      colour : 'red lighten-1',
      name : 'Testing Tasks'
    },
    {
      id : 3,
      colour : 'indigo lighten-1',
      name : 'Reviewed Tasks'
    },
    {
      id : 4,
      colour : 'blue lighten-1',
      name : 'Compeleted Tasks'
    }
  ]

  constructor() { }

  getTaskTypes() : Observable<TaskType[]> {
      return of(this.taskTypes)
  }
}
