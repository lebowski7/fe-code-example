import { Action, createStore } from 'redux';

import { IState } from './IState';
import { appReducers } from './reducers';

type Actions = Action<any>

const defaultState: IState = {
  content: [
    {
      description: 'Description',
      name: 'Repo 1',
      url: 'https://github.com/org/repo1',
      license: 'MIT',
      issues: 0,
      forks: 0,
      watchers: 0,
    },
    {
      name: 'Repo 2',
      url: 'https://github.com/org/repo2',
      description: 'Description',
      license: 'MIT',
      issues: 0,
      forks: 0,
      watchers: 0,
    },
  ],
  organisation: 'yahoo',
};

export const store = createStore<IState, Actions, any, any>(appReducers, defaultState);
