import * as constant from './filter.constant';
import axios from 'axios';


export const toggleFilterAction = toggle => ({
  type: constant.TOGGLE_FILTER,
  toggle
})

export const resetFilterAction = () => ({
  type: constant.RESET_FILTER
})

export const updateFiltersAction = filter => ({
  type: constant.UPDATE_FILTER,
  filter
})

export const getFilterDataSuccessAction = filterData => ({
  type: constant.GET_FILTER_DATA_SUCCESS,
  filterData
});

export const getFilterDataFailAction = error => ({
  type: constant.GET_FILTER_DATA_FAIL,
  error
});

export const fetchFilterDataAction = () => {
  return dispatch => {
    dispatch({
      type: constant.FETCH_FILTER_DATA
    })
    try {
      const getFilterData = async() => {
        const { data } = await axios.get('http://localhost:3333/api/facets')
        dispatch(getFilterDataSuccessAction(data))
      }
      getFilterData()
    } catch (error) {
      dispatch(getFilterDataFailAction(error))
    }
  }
}
