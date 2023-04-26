import { Resolver, Query, Args } from '@nestjs/graphql';
import { Movie } from 'src/@generated/movie/movie.model';
import { MovieService } from './movie.service';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => [Movie], { name: 'movies' })
  async findAll() {
    return this.movieService.findAll();
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.movieService.findOne(id);
  }
}
