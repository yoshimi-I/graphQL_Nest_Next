import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

@Resolver()
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}
  //ここはGraphQLの書き方で書く
  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.TaskService.getTasks();
  }

  @Mutation(() => Task)
  createTask(
    @Args('name') name: string,
    @Args('string') dueDate: string,
    @Args('description') description?: string,
  ): Task {
    return this.TaskService.createTask(name, dueDate, description);
  }
}
