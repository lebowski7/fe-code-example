import {Reducer} from 'redux';
import {actions, actionTypes} from "./actions";
import {IState} from './IState';

type Actions = actions;

export const initialState: IState = {
  repos: [],
  organisation: 'yahoo',
  loading: false
};
​
export const appReducers: Reducer<IState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOSITORIES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case actionTypes.FETCH_REPOSITORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        repos: action.payload
      }
    }
    case actionTypes.FETCH_REPOSITORIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case actionTypes.FETCH_CONTRIBUTORS_REQUEST: {
      return {
        ...state
      }
    }
    case actionTypes.FETCH_CONTRIBUTORS_SUCCESS: {
      return {
        ...state,
        repos: state.repos.map((item) => {
          if (item.name === action.payload.repoName) {
            return {
              ...item,
              contributors: action.payload.contributors
            }
          }
          return item;
        })
      }
    }
    case actionTypes.FETCH_CONTRIBUTORS_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
};
