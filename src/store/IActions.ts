import {Action} from "redux";
import {actionTypes} from "./actions";
import {IRepos, IContributorsRequest} from "./types";

export interface IFetchReposRequestAction extends Action {
  type: actionTypes.FETCH_REPOSITORIES_REQUEST;
}

export interface IFetchReposSuccessAction extends Action {
  type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
  payload: IRepos
}

export interface IFetchReposErrorAction extends Action {
  type: actionTypes.FETCH_REPOSITORIES_ERROR,
  payload: Error
}

export interface IFetchContributorsRequestAction extends Action {
  type: actionTypes.FETCH_CONTRIBUTORS_REQUEST,
  payload: IRepos
}

export interface IFetchContributorsSuccessAction extends Action {
  type: actionTypes.FETCH_CONTRIBUTORS_SUCCESS,
  payload: IContributorsRequest
}

export interface IFetchContributorsErrorAction extends Action {
  type: actionTypes.FETCH_CONTRIBUTORS_ERROR,
  payload: Error
}
