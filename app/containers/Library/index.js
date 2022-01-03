/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/**
 *
 * Library
 *
 */

import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CircularProgress,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  ListItemText,
  MenuList,
  MenuItem,
  Paper,
  Typography,
  Tooltip,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ArrowRight from '@material-ui/icons/ArrowRight';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectProps,
  makeSelectCategories,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadProps, loadCategories } from '../App/actions';

import { makeSelectSearch } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';
import { searchType } from './actions';

export function Library({
  search,
  props,
  categories,
  onLoadProps,
  onLoadCategories,
  onSearchType,
  loading,
  error,
}) {
  useInjectReducer({ key: 'library', reducer });
  useInjectSaga({ key: 'library', saga });

  useEffect(() => {
    onLoadProps();
    onLoadCategories();
  }, []);

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
                onRequestSearch={value => onLoadProps({ search: value })}
              />
            }
          />
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 3">
              <Paper elevation={12} className="menu-paper">
                <MenuList className="menu">
                  {categories &&
                    categories.map(category => (
                      <MenuItem
                        key={category.category}
                        onClick={() =>
                          onLoadProps({ category: category.category })
                        }
                      >
                        <ListItemText className="menu-item">
                          {category.category}
                        </ListItemText>
                        <Typography variant="body2" className="menu-item">
                          <ArrowRight />
                        </Typography>
                      </MenuItem>
                    ))}
                </MenuList>
              </Paper>
            </Box>
            <Box
              gridColumn="span 9"
              component="main"
              sx={{ flexGrow: 1, p: 3 }}
              className="scroll-box"
            >
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                {loading ? (
                  <CircularProgress
                    style={{ color: 'white', marginTop: '25%' }}
                  />
                ) : error ? (
                  <Alert severity="error">
                    Google Cloud Function rejected the request!
                    <br /> Too many requests were sent to the function in a
                    short timeframe.
                    <br /> Try and reload the page or applying the filter/search
                    again.
                  </Alert>
                ) : props && props.length === 0 ? (
                  <Alert severity="error">
                    No props were found! <br /> Please try a different search
                    query!
                  </Alert>
                ) : (
                  <ImageList cols={3} rowHeight={200}>
                    {props &&
                      // eslint-disable-next-line react/prop-types
                      props.map(prop => (
                        <ImageListItem key={prop.id}>
                          <img
                            src="https://picsum.photos/500"
                            // eslint-disable-next-line react/prop-types
                            alt={props.new_name}
                          />
                          <ImageListItemBar
                            title={prop.new_name}
                            subtitle={prop.category}
                            actionIcon={
                              <Tooltip title={prop.new_name}>
                                <IconButton
                                  style={{ color: 'white' }}
                                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                  aria-label={`info about ${prop.new_name}`}
                                >
                                  <InfoIcon />
                                </IconButton>
                              </Tooltip>
                            }
                          />
                        </ImageListItem>
                      ))}
                  </ImageList>
                )}
              </Grid>
            </Box>
          </Box>
        </Card>
      </Paper>
    </div>
  );
}

Library.propTypes = {
  search: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  props: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  categories: PropTypes.any,
  onLoadProps: PropTypes.func,
  onLoadCategories: PropTypes.func,
  onSearchType: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  props: makeSelectProps(),
  categories: makeSelectCategories(),
  search: makeSelectSearch(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearchType: value => dispatch(searchType(value)),
    onLoadProps: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadProps(evt));
    },
    onLoadCategories: () => dispatch(loadCategories()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Library);
