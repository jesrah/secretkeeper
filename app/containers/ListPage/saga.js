import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_SECRETS } from 'containers/App/constants';
import { secretsLoaded, secretsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export const requestURL = `http://localhost:3000/secrets`;

export function* getSecrets() {
  try {
    // Call our request helper (see 'utils/request')
    const secrets = yield call(request, requestURL);
    yield put(secretsLoaded(secrets));
  } catch (error) {
    yield put(secretsLoadingError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* secretsData() {
  // Saga for action LOAD_SECRETS, responds with getSecrets
  yield takeEvery(LOAD_SECRETS, getSecrets);
}