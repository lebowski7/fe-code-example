import { Action } from "redux";
import { actionTypes } from "./actions";

export interface IRepo {
  id: number
  name: string
  html_url: string
  description: string
  license: any
  open_issues_count: number
  forks: number
  watchers: number
  contributors?: number
}

export type IRepos = IRepo[];

export interface IContributorsRequest {
  repoName: string,
  contributors: number
}

export interface IFetchReposRequestAction extends Action {
    type: actionTypes.FETCH_REPOSITORIES_REQUEST;
}

export interface IFetchReposSuccessAction extends Action {
    type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
    payload: IRepo[]
}

export interface IFetchReposErrorAction extends Action {
  type: actionTypes.FETCH_REPOSITORIES_ERROR,
  payload: Error
}

export interface IFetchContributorsRequestAction extends Action {
  type: actionTypes.FETCH_CONTRIBUTORS_REQUEST,
  payload: string
}

export interface IFetchContributorsSuccessAction extends Action {
  type: actionTypes.FETCH_CONTRIBUTORS_SUCCESS,
  payload: IContributorsRequest
}

export interface IFetchContributorsErrorAction extends Action {
  type: actionTypes.FETCH_CONTRIBUTORS_ERROR,
  payload: Error
}
