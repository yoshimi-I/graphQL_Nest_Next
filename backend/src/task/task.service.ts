import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(name: string, dueDate: string, description?: string): Task {
    const newTasks = new Task();
    newTasks.id = this.tasks.length + 1;
    newTasks.name = name;
    newTasks.dueDate = dueDate;
    newTasks.description = description;
    newTasks.status = 'NOT_STATED';
    this.tasks.push(newTasks);
    return newTasks;
  }
}
