/*
 *
 * Library reducer
 *
 */
import produce from 'immer';
import { SEARCH_TYPE } from './constants';

export const initialState = {
  searchText: '',
};

/* eslint-disable default-case, no-param-reassign */
const libraryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH_TYPE:
        draft.searchText = action.searchText;
        break;
    }
  });

export default libraryReducer;
