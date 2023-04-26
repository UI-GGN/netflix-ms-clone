import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => ID, { nullable: false })
  id!: string;

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

  @Field(() => String, { nullable: false })
  star1!: string;

  @Field(() => String, { nullable: false })
  star2!: string;

  @Field(() => String, { nullable: false })
  star3!: string;

  @Field(() => String, { nullable: false })
  star4!: string;

  @Field(() => Int, { nullable: false })
  numberOfVotes!: number;

  @Field(() => String, { nullable: true })
  gross!: string | null;
}
