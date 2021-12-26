/**
 *
 * Library
 *
 */

import React from 'react';
import { Card, CardHeader, Paper } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectSearch } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';
import { searchType } from './actions';

export function Library({ search, onSearchType }) {
  useInjectReducer({ key: 'library', reducer });
  useInjectSaga({ key: 'library', saga });

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
                // onRequestSearch={() => console.log(this.state.value)}
              />
            }
          />
        </Card>
      </Paper>
    </div>
  );
}

Library.propTypes = {
  search: PropTypes.string,
  onSearchType: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  search: makeSelectSearch(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearchType: value => dispatch(searchType(value)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Library);
