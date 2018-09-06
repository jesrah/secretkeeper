/**
 * Tests for HomePage sagas
 */

import { takeEvery } from 'redux-saga/effects';

import { POST_SECRET_DATABASE } from 'containers/App/constants';

import secretSubmissions, { insertSecret } from '../saga';

/* eslint-disable redux-saga/yield-effects */

describe('secretSubmissions Saga', () => {
  const secretSubmissionsSaga = secretSubmissions();

  it('should start task to watch for POST_SECRET_DATABASE action', () => {
    const takeEveryDescriptor = secretSubmissionsSaga.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery(POST_SECRET_DATABASE, insertSecret));
  });
});
