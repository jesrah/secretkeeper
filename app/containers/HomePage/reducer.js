/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { SUBMIT_SECRET } from './constants';
import { POST_SECRET_DATABASE } from 'containers/App/constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  currentString: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_SECRET:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default homePageReducer;
