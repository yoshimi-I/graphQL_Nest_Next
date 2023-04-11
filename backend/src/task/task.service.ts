import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.input';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  //prismaと接続するためのコードを書く
  constructor(private prisma: PrismaService) {}

  async getTasks(): Promise<Task[]> {
    //prismaを用いたget処理
    return await this.prisma.task.findMany();
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const newTasks = new Task();
    const { name, dueDate, description } = createTaskDto;
    newTasks.id = this.tasks.length + 1;
    newTasks.name = name;
    newTasks.dueDate = dueDate;
    newTasks.description = description;
    newTasks.status = 'NOT_STARTED';
    this.tasks.push(newTasks);
    return newTasks;
  }
}
