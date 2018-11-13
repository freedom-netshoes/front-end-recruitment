import { UPDATE_FILTER } from './actionTypes';


export const updateFilters = (filters) => dispatch => {
  dispatch({
    type: UPDATE_FILTER,
    payload: filters,
  });
}