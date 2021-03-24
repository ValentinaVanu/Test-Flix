import * as constant from './movie.constant'

export const InitialState = {
  loading: false,
  movieList: [],
  error: ''
}

export const movieReducer = ( state = InitialState, action ) => {
  switch (action.type) {
    case constant.REMOVE_MOVIE_FROM_LIST:
      return {
        ...state,
        movieList: state.movieList.filter(x => x.Poster !== action.poster)
      }
    case constant.UPDATE_MOVIE:
      return {
        ...state,
        movieList: state.movieList.map(x => x.imdbID === action.imdbID ? ({
          ...x,
          [action.who]: x[action.who] === 'True' ? 'False' : 'True'
        }) : x)
      }
    case constant.GET_MOVIE_LIST_FETCH:
      return {
        ...state,
        loading: true
      }
      case constant.GET_MOVIE_LIST_SUCCESS:
        return {
          ...state,
          movieList: action.movieList,
          loading: false
        }
      case constant.GET_MOVIE_LIST_FAIL:
        return {
          ...state,
          error: action.error,
          loading: false
        }
        
    default:
      return state
  }
}
