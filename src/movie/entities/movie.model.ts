import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  thumbnail!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => Int, { nullable: false })
  releasedYear!: number;

  @Field(() => String, { nullable: true })
  certificate!: string | null;

  @Field(() => String, { nullable: false })
  runtime!: string;

  @Field(() => String, { nullable: false })
  genre!: string;

  @Field(() => Float, { nullable: false })
  rating!: number;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Int, { nullable: true })
  metaScore!: number | null;

  @Field(() => String, { nullable: false })
  director!: string;

  @Field(() => [String], { nullable: true })
  cast!: Array<string>;

  @Field(() => Int, { nullable: false })
  numberOfVotes!: number;

  @Field(() => String, { nullable: true })
  gross!: string | null;
}
