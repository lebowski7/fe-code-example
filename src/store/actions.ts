import {ActionCreator} from 'redux';
import {actionTypes} from './constants';
import {
  IFetchContributorsErrorAction,
  IFetchContributorsRequestAction,
  IFetchContributorsSuccessAction,
  IFetchReposErrorAction,
  IFetchReposRequestAction,
  IFetchReposSuccessAction
} from './IActions';
import {IContributorsRequest, IRepos} from './types';

export const fetchReposRequest: ActionCreator<IFetchReposRequestAction> = () => ({
  type: actionTypes.FETCH_REPOSITORIES_REQUEST
});

export const fetchReposSuccess: ActionCreator<IFetchReposSuccessAction> = (payload: IRepos) => ({
  type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
  payload
});

export const fetchReposError: ActionCreator<IFetchReposErrorAction> = (error: Error) => ({
  type: actionTypes.FETCH_REPOSITORIES_ERROR,
  payload: error
});

export const fetchContributorsRequest: ActionCreator<IFetchContributorsRequestAction> = (payload: IRepos) => ({
  type: actionTypes.FETCH_CONTRIBUTORS_REQUEST,
  payload
});

export const fetchContributorsSuccess: ActionCreator<IFetchContributorsSuccessAction> = (payload: IContributorsRequest) => ({
  type: actionTypes.FETCH_CONTRIBUTORS_SUCCESS,
  payload: {
    repoName: payload.repoName,
    contributors: payload.contributors
  }
});

export const fetchContributorsError: ActionCreator<IFetchContributorsErrorAction> = (error: Error) => ({
  type: actionTypes.FETCH_CONTRIBUTORS_ERROR,
  payload: error
});

export type actions =
  IFetchReposRequestAction
  | IFetchReposSuccessAction
  | IFetchReposErrorAction
  | IFetchContributorsRequestAction
  | IFetchContributorsSuccessAction
  | IFetchContributorsErrorAction;
