/*
 *
 * Library actions
 *
 */

import { SEARCH_TYPE } from './constants';

export function searchType(searchText) {
  return {
    type: SEARCH_TYPE,
    searchText,
  };
}
