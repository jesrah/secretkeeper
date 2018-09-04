/**
 *
 * ListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Title from 'components/Title';
import Wrapper from 'components/Wrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadSecrets } from '../App/actions'
//still need to create selectors

/* eslint-disable react/prefer-stateless-function */
export class ListPage extends React.Component {
  componentDidMount(){
    this.props.loadSecrets();
  }
  render() {
    const { loading, error, strings } = this.props;
    const listProps = {
      loading,
      error,
      strings,
    };
    return (
      <div>
        <Title>
        <List {...listProps} />
        </Title>
      </div>
    );
  }
}

ListPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  strings: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadSecrets: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // listpage: makeSelectListPage(),
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadSecrets: () => dispatch(loadSecrets()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'listPage', reducer });
const withSaga = injectSaga({ key: 'listPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListPage);
