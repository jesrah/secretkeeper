import { put, select, takeEvery } from 'redux-saga/effects';
import { SUBMIT_SECRET } from './constants'
import { POST_SECRET_DATABASE } from 'containers/App/constants';

import post from 'utils/post';
import { makeSelectCurrentSecret } from 'containers/HomePage/selectors';

//handle req/res for secret strings here
//will select the secret from the store and match against action
export function* insertSecret() {
    const currentSecret = yield select(makeSelectCurrentSecret());
    const requestURL = 'http://localhost:3000/secrets'

    yield post(requestURL, currentSecret);
    yield put({ type: SUBMIT_SECRET, secret: ''});
}

//starts new insertSecret task on each dispatched PostSecretDatabase action

export default function* secretSubmissions() {
	//takeEvery(pattern, saga, ...args)
  yield takeEvery(POST_SECRET_DATABASE, insertSecret);
}