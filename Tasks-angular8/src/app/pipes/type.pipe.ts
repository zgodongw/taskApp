import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/Task';

@Pipe({
    name: "tasktype",
    pure: false
})
export class TaskTypePipe implements PipeTransform {
    transform(tasks: Task[], type: number): Task[] {
        return tasks.filter((task) => {
            return task.type == type;
        })
    }
}