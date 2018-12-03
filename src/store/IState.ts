import {IRepos} from "./types";

export type IContent = IRepos;

export interface IState {
  repos: IContent
  organisation: string,
  loading: boolean
}
