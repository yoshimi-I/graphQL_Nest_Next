import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';
import { CreateTaskDto } from './dto/createTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}
  //ここはGraphQLの書き方で書く
  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.TaskService.getTasks();
  }

  @Mutation(() => Task)
  createTask(@Args('createTaskDto') createTaskDto: CreateTaskDto): Task {
    return this.TaskService.createTask(createTaskDto);
  }
}
