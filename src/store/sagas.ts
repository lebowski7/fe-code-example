import { all, call, put, takeEvery } from 'redux-saga/effects';

import {fetchContributorsService, fetchReposService} from './services';
import {
  fetchReposSuccess,
  fetchReposError,
  fetchContributorsSuccess,
  fetchContributorsError,
  actionTypes
} from './actions';
import { IFetchContributorsRequestAction, IRepo } from './types';

export function* fetchRepos() {
  try {
    const result: IRepo[] = yield call(fetchReposService);
    yield put(fetchReposSuccess(result));
  } catch (err) {
    yield put(fetchReposError(err));
  }
}

export function* fetchContributors(repoName: IFetchContributorsRequestAction) {
  try {
    const result: number = yield call(fetchContributorsService, repoName.payload);

    yield put(fetchContributorsSuccess({ contributors: result, repoName: repoName.payload }));
  } catch (err) {
    yield put(fetchContributorsError(err));
  }
}

function* watchFetchContributors() {
  yield takeEvery(actionTypes.FETCH_CONTRIBUTORS_REQUEST, fetchContributors)
}

export default function* root() {
  yield all([
    fetchRepos(),
    watchFetchContributors()
  ])
}
