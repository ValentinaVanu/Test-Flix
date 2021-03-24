import { combineReducers } from 'redux'
import { movieReducer } from './movies/movie.reducer'
import { filterReducer } from './filter/filter.reducer'

const createReducer = asyncReducers => combineReducers({
  movie: movieReducer,
  filter: filterReducer,
  ...asyncReducers
})

export default createReducer
