import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the library state domain
 */

const selectSearch = state => state.search || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Library
 */

const makeSelectSearch = () =>
  createSelector(
    selectSearch,
    searchState => searchState.searchText,
  );

export { selectSearch, makeSelectSearch };
