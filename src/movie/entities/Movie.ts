import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Movie {
  @Field()
  id: string;

  @Field()
  title: string;
}
