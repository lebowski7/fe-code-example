import {all, call, put, takeEvery} from 'redux-saga/effects';

import {fetchContributorsService, fetchReposService} from '../services';
import {
  fetchReposSuccess,
  fetchReposError,
  fetchContributorsSuccess,
  fetchContributorsError,
  actionTypes
} from './actions';
import {IRepo} from './types';
import {IFetchContributorsRequestAction} from "./IActions";

export function* fetchRepos() {
  try {
    const result: IRepo[] = yield call(fetchReposService);
    yield put(fetchReposSuccess(result));
  } catch (err) {
    yield put(fetchReposError(err));
  }
}

export function* fetchContributors(repos: IFetchContributorsRequestAction) {
  try {
    for (const repo of repos.payload) {
      const result: number = yield call(fetchContributorsService, repo.name);
      yield put(fetchContributorsSuccess({contributors: result, repoName: repo.name}));
    }

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
