import { combineReducers } from 'redux';

import { IContent, IState } from './IState';

​export const appReducers = combineReducers<IState>({
  content: (state: IContent = []) => state,
  organisation: (state: string = '') => state,
});
​