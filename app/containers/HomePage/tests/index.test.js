import React from 'react';
import { shallow, mount } from 'enzyme';
import { FormattedMessage, IntlProvider } from 'react-intl';

import { HomePage, mapDispatchToProps } from '../index';
import messages from '../messages';
import { submitSecret } from '../actions'
import { postSecretDatabase } from 'containers/App/actions';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });

  it('should not call onSubmitForm if secret is an empty string', () => {
  	const submitSpy = jest.fn();
  	mount(
  		<IntlProvider locale="en">
  			<HomePage handleChange={() => {}} onSubmitForm={submitSpy} />
  		</IntlProvider>,

  	);
  	expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('handleChange', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleChange).toBeDefined();
      });

      it('should dispatch submitSecret when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const secret = 'secret';
        result.handleChange({ target: { value: secret } });
        expect(dispatch).toHaveBeenCalledWith(submitSecret(secret));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch postSecretDatabase when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(postSecretDatabase());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const e = { preventDefault };
        result.onSubmitForm(e);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });  
  });

});
