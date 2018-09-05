/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';

import { SUBMIT_SECRET } from './constants';
import { POST_SECRET_DATABASE } from 'containers/App/constants';

// The initial state of the App
export const initialState = fromJS({
  currentSecret: '',
  loading: false,
});

function homePageGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_SECRET:
      return state
        .set('currentSecret', action.secret);
    case POST_SECRET_DATABASE:
      return state.set('loading', true);
    default:
      return state;
  }
}

export default homePageGeneratorReducer;
