/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_PROPS,
  LOAD_PROPS_SUCCESS,
  LOAD_PROPS_ERROR,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
} from './constants';

/**
 * Load props, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PROPS
 */
export function loadProps(input) {
  return {
    type: LOAD_PROPS,
    category: input && input.category,
    search: input && input.search,
  };
}

/**
 * Dispatched when the props are loaded by the request saga
 * @param  {array} data The props data
 *
 * @return {object}      An action object with a type of LOAD_PROPS_SUCCESS passing the props
 */
export function propsLoaded(data) {
  return {
    type: LOAD_PROPS_SUCCESS,
    props: data,
  };
}

/**
 * Dispatched when loading the props fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PROPS_ERROR passing the error
 */
export function propsLoadingError(error) {
  return {
    type: LOAD_PROPS_ERROR,
    error,
  };
}

/**
 * Load categories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CATEGORIES
 */
export function loadCategories() {
  return {
    type: LOAD_CATEGORIES,
  };
}

/**
 * Dispatched when the categories are loaded by the request saga
 * @param  {array} categories The categories data
 *
 * @return {object}      An action object with a type of LOAD_CATEGORIES_SUCCESS passing the categories
 */
export function categoriesLoaded(data) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories: data,
  };
}

/**
 * Dispatched when loading the categories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CATEGORIES_ERROR passing the error
 */
export function categoriesLoadingError(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    error,
  };
}
