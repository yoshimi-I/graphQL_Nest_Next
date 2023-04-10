import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@ObjectType()
export class Task {
  @Field(() => Int) //これはIntに指定しないとfloatになってしまう
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: Status;

  @Field({ nullable: true }) //nullableは指定しないと!がつかない
  description: string;

  // 作成時のフィールドを作成
  @Field()
  createdAt: Date;

  //更新時のフィールドを作成生
  @Field()
  updatedAt: Date;
}
