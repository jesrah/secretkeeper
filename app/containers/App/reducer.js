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

import { LOAD_SECRETS_SUCCESS, LOAD_SECRETS, LOAD_SECRETS_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  secrets: {
    loading: false,
    error: false,
    items: [],
    load: true,
  },
});

//understand what's happening here
function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SECRETS:
      return state
        .setIn(['secrets', 'loading'], true)
        .set(['secrets', 'error'], false)
        .set(['secrets', 'items'], false);
    case LOAD_SECRETS_SUCCESS:
      return state
        .setIn(['secrets', 'items'], action.secrets)
        .set(['secrets', 'loading'], false);
    case LOAD_SECRETS_ERROR:
      return state
        .setIn(['secrets', 'error'], action.error)
        .setIn(['secrets', 'loading'], false);
    default:
      return state;
  }
}

export default appReducer;
