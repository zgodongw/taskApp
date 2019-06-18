import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/Task';

@Pipe({name: "tasktype"})
export class TaskTypePipe implements PipeTransform {
    transform(tasks: Task[], type: Number): Task[] {
        return tasks.filter((task) => {
            return task.type == type;
        })
    }
}