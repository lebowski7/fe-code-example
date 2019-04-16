import {IRepos} from './types';

export interface IState {
  repos: IRepos
  organisation: string,
  loading: boolean
}
