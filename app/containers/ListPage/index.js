/**
 *
 * ListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Title from 'components/Title';
import Wrapper from 'components/Wrapper';
import List from 'components/List';
import messages from './messages';

import saga from './saga';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectSecrets,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadSecrets } from '../App/actions'

/* eslint-disable react/prefer-stateless-function */
//should be a PureComponent
export class ListPage extends React.Component {
  componentDidMount(){
    this.props.loadSecrets();
  }
  render() {
    const { loading, error, secrets } = this.props;
    const listProps = {
      loading,
      error,
      secrets,
    };
    return (
      <div>
      <Wrapper>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <List {...listProps} />
      </Wrapper>
      </div>
    );
  }
}

ListPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  secrets: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadSecrets: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // listpage: makeSelectListPage(),
  secrets: makeSelectSecrets(),
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

const withSaga = injectSaga({ key: 'listPage', saga });

export default compose(
  withSaga,
  withConnect,
)(ListPage);
