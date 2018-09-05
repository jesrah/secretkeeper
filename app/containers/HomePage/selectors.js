import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSubmit = state => state.get('homepage', initialState);

const makeSelectCurrentSecret = () =>
  createSelector(selectSubmit, submitState => submitState.get('currentSecret'));

export { makeSelectCurrentSecret };