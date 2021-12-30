import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PROPS } from 'containers/App/constants';
import { propsLoaded, propsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectSearch } from './selectors';

/**
 * Props request/response handler
 */
export function* getProps(data) {
  // eslint-disable-next-line prettier/prettier
  let requestURL = 'https://us-central1-props-library.cloudfunctions.net/load-props';
  if (data && data.category)
    // eslint-disable-next-line prettier/prettier
    requestURL = `https://us-central1-props-library.cloudfunctions.net/filter-props?category=${data.category}`;
  else if (data && data.search)
    // eslint-disable-next-line prettier/prettier
    requestURL = `https://us-central1-props-library.cloudfunctions.net/search-props?search=${data.search}`;

  try {
    // Call request helper (see 'utils/request')
    const props = yield call(request, requestURL);
    yield put(propsLoaded(props.data));
  } catch (err) {
    yield put(propsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* propsData() {
  // Watches for LOAD_PROPS actions and calls getProps when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PROPS, getProps);
}
