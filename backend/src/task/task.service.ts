import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { CreateTaskDto } from './dto/createTask.input';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const newTasks = new Task();
    const { name, dueDate, description } = createTaskDto;
    newTasks.id = this.tasks.length + 1;
    newTasks.name = name;
    newTasks.dueDate = dueDate;
    newTasks.description = description;
    newTasks.status = 'NOT_STATED';
    this.tasks.push(newTasks);
    return newTasks;
  }
}
