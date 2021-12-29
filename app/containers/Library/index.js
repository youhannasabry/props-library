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
import { loadProps } from '../App/actions';

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
  onSearchType,
}) {
  useInjectReducer({ key: 'library', reducer });
  useInjectSaga({ key: 'library', saga });

  useEffect(() => {
    onLoadProps();
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
                onRequestSearch={onSearchType}
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
                        onClick={() => onLoadProps(category.category)}
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
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadProps: PropTypes.func,
  onSearchType: PropTypes.func,
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
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Library);
