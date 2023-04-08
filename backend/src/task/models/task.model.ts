import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => Int) //これはIntに指定しないとfloatになってしまう
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: 'NOT_STATED' | 'IN_PROGRESS' | 'COMPLETED';

  @Field({ nullable: true }) //nullableは指定しないと!がつかない
  description: string;
}
