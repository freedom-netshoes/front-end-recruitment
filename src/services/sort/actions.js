import { UPDATE_SORT } from './actionTypes';


export const updateSort = (sort) => dispatch => {
  dispatch({
    type: UPDATE_SORT,
    payload: sort,
  });
}