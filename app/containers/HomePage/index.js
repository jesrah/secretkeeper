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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Title from 'components/Title';
import Wrapper from 'components/Wrapper';
import Input from 'components/Input';
import NavBar from 'components/NavBar';

import { submitSecret } from './actions';
import { postSecretDatabase} from 'containers/App/actions';

/* eslint-disable react/prefer-stateless-function */
/* NavBar could be  <NavBar active={this.state.active} onClick={this.handleButton}/> */

export default class HomePage extends React.PureComponent {
  render() {
    return (
    	<Wrapper>
	      <Title>
	        <FormattedMessage {...messages.header} />
	        	
	      </Title>
	    	<form onSubmit={e => this.props.handleSubmit(e)} autoComplete="off">
		    	<Input
		    		text 
		      	type="text"
		      	id="input" 
		      	name="string"
		      	placeholder="&lt;press enter when done&gt;"
		      	value={this.props.currentValue} 
		      	onChange={this.props.handleChange}
		    	/>
	     </form>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
	handleSubmit: PropTypes.func,
	handleChange: PropTypes.func,
	currentValue: PropTypes.string,
}

const mapStateToProps = {};

function mapDispatchToProps(dispatch) {
	return {
		handleChange: e => {
			e.preventDefault();
			dispatch(submitSecret(e.target.value));
		},
		handleSubmit: e => {
			if (e !== undefined && e.preventDefault) {
				e.preventDefault();
			} 
			dispatch(postSecret);
		},
	};
}

// const ConnectedForm = connect(null, mapDispatchToProps)(HomePage);