import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  constructor(private taskService: TaskService ) { }

  ngOnInit() {
  }

  edit(id: Number) {
    console.log("edit was clicked");
    
  }

  delete(id: Number) {

  }

  moveBack(id: Number) {
    
  }

  moveForward(id: Number) {
    console.log("Moving forward")
    this.taskService.moveForward(id)
  }

}
