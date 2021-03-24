import * as constant from './movie.constant'
import { get } from 'axios'

export const removeMovieFromListAction = poster => ({
  type: constant.REMOVE_MOVIE_FROM_LIST,
  poster
})

export const setMovieSaved = (who, imdbID) => ({
  type: constant.UPDATE_MOVIE,
  who,
  imdbID
})

export const getMovieListSuccessAction = movieList => ({
  type: constant.GET_MOVIE_LIST_SUCCESS,
  movieList
});

export const getMovieListFailAction = error => ({
  type: constant.GET_MOVIE_LIST_FAIL,
  error
})

export const fetchMovieListAction = () => {
  return dispatch => {
    dispatch({
      type: constant.GET_MOVIE_LIST_FETCH,
    })
    // Sucess and Failiure
    try {
      const getMovieList = async() => {
        const { data } = await get('http://localhost:3333/api/movies')
        dispatch(getMovieListSuccessAction((data)))
      }
      getMovieList()
    } catch (error) {
      dispatch(getMovieListFailAction(error))
    }
  }
}
