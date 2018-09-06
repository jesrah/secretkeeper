/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import { makeSelectCurrentSecret } from './selectors';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Title from 'components/Title';
import Wrapper from 'components/Wrapper';
import Input from 'components/Input';
import NavBar from 'components/NavBar';

import { submitSecret } from './actions';
import { postSecretDatabase} from 'containers/App/actions';

export class HomePage extends React.PureComponent {
  render() {
    return (
    	<Wrapper>
	      <Title>
	        <FormattedMessage {...messages.header} />
	        	
	      </Title>
	    	<form onSubmit={e => this.props.onSubmitForm(e)} autoComplete="off">
		    	<Input
		    		text 
		      	type="text"
		      	id="input" 
		      	name="secret"
		      	placeholder="&lt;press enter when done&gt;"
		      	value={this.props.currentSecret} 
		      	onChange={this.props.handleChange}
		    	/>
	     </form>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
	onSubmitForm: PropTypes.func,
	handleChange: PropTypes.func,
	currentSecret: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
	currentSecret: makeSelectCurrentSecret(),
});

export function mapDispatchToProps(dispatch) {
	return {
		handleChange: e => {
			if (e !== undefined && e.preventDefault) e.preventDefault();
			dispatch(submitSecret(e.target.value));
		},
		onSubmitForm: e => {
			if (e !== undefined && e.preventDefault) e.preventDefault();
			dispatch(postSecretDatabase());
		},
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homepage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);