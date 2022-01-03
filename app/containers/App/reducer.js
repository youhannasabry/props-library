/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_PROPS_SUCCESS,
  LOAD_PROPS,
  LOAD_PROPS_ERROR,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  props: false,
  categories: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PROPS:
        draft.loading = true;
        draft.error = false;
        draft.props = false;
        break;

      case LOAD_PROPS_SUCCESS:
        draft.props = action.props;
        draft.loading = false;
        break;

      case LOAD_PROPS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_CATEGORIES:
        draft.loading = true;
        draft.error = false;
        draft.categories = false;
        break;

      case LOAD_CATEGORIES_SUCCESS:
        draft.categories = action.categories;
        draft.loading = false;
        break;

      case LOAD_CATEGORIES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
