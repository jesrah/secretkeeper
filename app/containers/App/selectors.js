// import { createSelector } from 'reselect';

// const selectRoute = state => state.get('route');

// const makeSelectLocation = () =>
//   createSelector(selectRoute, routeState => routeState.get('location').toJS());

// export { makeSelectLocation };

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectCurrentSecret = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['insert', 'currentSecret']),
  );

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['secrets', 'loading']),
  );

const makeSelectInsertingToDb = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['insert', 'isInserting']),
  );

const makeSelectError = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['secrets', 'error']),
  );

const makeSelectDbError = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['insert', 'error']),
  );

const makeSelectSecrets = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['secrets', 'items']),
  );

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectCurrentSecret,
  makeSelectLoading,
  makeSelectInsertingToDb,
  makeSelectError,
  makeSelectDbError,
  makeSelectSecrets,
  makeSelectLocation,
};
