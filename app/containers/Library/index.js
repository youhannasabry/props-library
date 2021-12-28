/**
 *
 * Library
 *
 */

import React, { useEffect } from 'react';
import { Card, CardHeader, Paper } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectProps,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadProps } from '../App/actions';

import { makeSelectSearch } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';
import { searchType } from './actions';

export function Library({
  search,
  // loading,
  // error,
  // props,
  onLoadProps,
  onSearchType,
}) {
  useInjectReducer({ key: 'library', reducer });
  useInjectSaga({ key: 'library', saga });

  useEffect(() => {
    onLoadProps();
  }, []);

  // const propsListProps = {
  //   loading,
  //   error,
  //   props,
  // };

  return (
    <div>
      <Paper elevation={24} className="paper">
        <Card variant="outlined" className="card">
          <CardHeader
            title="Props"
            className="header"
            action={
              <SearchBar
                value={search}
                onChange={onSearchType}
                onRequestSearch={onSearchType}
              />
            }
          />
        </Card>
      </Paper>
    </div>
  );
}

Library.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  search: PropTypes.string,
  // props: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadProps: PropTypes.func,
  onSearchType: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  props: makeSelectProps(),
  search: makeSelectSearch(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearchType: value => dispatch(searchType(value)),
    onLoadProps: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadProps());
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Library);
