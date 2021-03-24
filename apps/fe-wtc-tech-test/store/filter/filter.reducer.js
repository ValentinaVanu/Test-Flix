import * as constant from './filter.constant'

export const initialState = {
  loading: false,
  filterData: {},
  error: '',
  filters: {},
  toggle: false,
}

export const filterReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case constant.TOGGLE_FILTER:
      return {
        ...state,
        toggle: action.toggle
      }
    case constant.RESET_FILTER:
      return {
        ...state,
        filters: {}
      }
    case constant.UPDATE_FILTER:
      return {
        ...state,
        filters:{
          ...state.filters,
          ...action.filter
        }
      }
    case constant.FETCH_FILTER_DATA:
      return {
        ...state,
        loading: true
      }
      case constant.GET_FILTER_DATA_SUCCESS:
        return {
          ...state,
          filterData: action.filterData,
          loading: false
        }
        case constant.GET_FILTER_DATA_FAIL:
          return {
            ...state,
            error: action.error,
            loading: false
          }
    default:
      return state
  }
}
