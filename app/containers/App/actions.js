/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { 
	LOAD_SECRETS,
	LOAD_SECRETS_SUCCESS,
	LOAD_SECRETS_ERROR,
	POST_SECRET
} from './constants';

/**
 * Loads all secrets, starting a request saga
 *
 * @return {object}    An action object with a type of LOAD_SECRETS
 */
export function loadSecrets() {
  return {
    type: LOAD_SECRETS,
  };
}

export function secretsLoaded(strings) {
	return {
		type: LOAD_SECRETS_SUCCESS,
		strings,
	}
}

export function secretsLoadingError(error) {
	return {
		type: LOAD_SECRETS_ERROR,
		error,
	}
}

export function postSecretToDatabase() {
	return {
		type: POST_SECRET,
	}
}