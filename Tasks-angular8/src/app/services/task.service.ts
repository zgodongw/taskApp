import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs'
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {
        id: 1,
        title: "Hello",
        desc: "World",
        type: 1,
        color: "blue-grey darken-1"
    },
    {
        id: 2,
        title: "Do stuff",
        desc: "Get it done ASAP",
        type: 1,
        color: "green darken-2"
    },
    {
        id: 3,
        title: "Next",
        desc: "One",
        type: 2,
        color: "grey darken-3"
    }
  ]

  constructor() { }

  getTasks(): Observable<Task[]> {

    return of(this.tasks);
  }

  moveForward(id: Number) {
    this.tasks.forEach(item => {
      if (item.id === id) {
        if (item.type < 4) {
            item.type = item.type + 1
        }
      }
    })
  }

  moveBackWard(id: Number) {
    this.tasks.forEach(item => {
      if (item.id === id) {
        if (item.type > 1) {
            item.type = item.type - 1
        }
      }
    })
  }
}
