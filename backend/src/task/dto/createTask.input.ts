import { Field, InputType } from "@nestjs/graphql";
import { IsDateString, IsNotEmpty } from "class-validator";

@InputType() //これでバリデーションのチェックができる
export class CreateTaskDto {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsDateString()
  dueDate: string;

  @Field({ nullable: true })
  description!: string;
}
