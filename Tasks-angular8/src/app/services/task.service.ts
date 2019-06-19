import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { map, tap } from 'rxjs/operators';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksarray: Task[] = [
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

  private tasks: Observable<Task[]>;

  urlString: string = "http://localhost:8080/api/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    this.tasks = this.http.get<Task[]>(this.urlString);
    return (this.tasks);
  }




  moveForward(id: Number) {
    // this.tasksarray.forEach(item => {
    //   if (item.id === id) {
    //     if (item.type < 4) {
    //         item.type = item.type + 1
    //     }
    //   }
    // })
    console.log("attempting to mutate");
    
    this.tasks.pipe(
      map(tasks => tasks.map(item => {
        if (item.id === id) {
          if (item.type > 1) {
              item.type = item.type + 1
          }
        }
        return item;
      })
      
      ),
      //tap(tasks => console.log(tasks))
    ).subscribe()
  }

  moveBackWard(id: Number) {
    // this.tasks?.forEach(item => {
    //   if (item.id === id) {
    //     if (item.type > 1) {
    //         item.type = item.type - 1
    //     }
    //   }
    // })
  }
}
